import {connect} from '@/database/mongo.config';
import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/validator/authSchema';

import vine, { errors } from '@vinejs/vine';
import ErrorReporter from '@/validator/ErrorReporter';

import bcrypt from 'bcryptjs';

import { User } from '@/model/User';

// * For DB Connection
connect();

export async function POST(request:NextRequest) {

    try {

    const body = await request.json();
    const validator = vine.compile(registerSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);


    // Check User Email User
    const user = await User.findOne({email:output.email});
    if(user) {
        return NextResponse.json({
            status:400,
            errors:{
                email:"Email is already in use."
            }
        }, {status:200}
        );
    } else {

         // Incrypt the password.
        const salt = bcrypt.genSaltSync(10);
        output.password = bcrypt.hashSync(output.password, salt);
        await User.create(output)
        return NextResponse.json({status:200, message:"User Created Sucessfully..!"}, {status:200});
    }
        
    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json(
                {status:400, errors: error.message}, 
                {status:200}
            );
        }
    }

}