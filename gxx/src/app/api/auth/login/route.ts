import {connect} from '@/database/mongo.config';
// import dbConnect from '@/database/mongo.config';
import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/validator/authSchema';
import vine, { errors } from '@vinejs/vine';
import ErrorReporter from '@/validator/ErrorReporter';

import { signIn } from 'next-auth/react';

import bcrypt from 'bcryptjs';

import { User } from '@/model/User';


// dbConnect();

connect();

export async function POST(request:NextRequest) {
    try {
        const body = await request.json();
        vine.errorReporter = () => new ErrorReporter();
        const validator = vine.compile(loginSchema);
        const output = await validator.validate(body);
        const user = await User.findOne({ email: output.email });
        if (user) {
          const checkPassword = bcrypt.compareSync(output.password!, user.password);
          console.info("the checkpassword is", checkPassword);
          if (checkPassword) {
            return NextResponse.json(
              { status: 200, message: "User Logged in successfully!" },
              { status: 200 }
            );
          }
          return NextResponse.json(
            {
              status: 400,
              errors: {
                email: "Please check your credentials.",
              },
            },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            {
              status: 400,
              errors: {
                email: "No User found in our system with above email.",
              },
            },
            { status: 200 }
          );
        }

        // return NextResponse.json({
        //     status:400,
        //     errors:{
        //         email:"No account is registered  with this email"
        //     },
        // } , 
        // {status:200}
        // );



    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json(
                {status:400, errors: error.message}, 
                {status:200}
            );        
            }
    }
}