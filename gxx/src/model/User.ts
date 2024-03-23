import mongoose , {Schema, SchemaType} from "mongoose";


const userSchema = new Schema({
    name:{
        required:[true, 'Please provide your name'],
        type:Schema.Types.String,
    },
    email:{
        required:[true, 'Please provide your email'],
        type:Schema.Types.String,
        unique: true,
        trim: true,  //removes any extra spaces before or after the string.
    },
    password:{
        required:[true, 'Please provide your password'],
        type:Schema.Types.String
    },
});

export const User = mongoose.models.User || mongoose.model("User",userSchema);

