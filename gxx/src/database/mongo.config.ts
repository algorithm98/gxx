import mongoose from "mongoose";

export function connect() {
    mongoose
    .connect(process.env.MONGODB_URL as string , {
        tls: true,
    })
    
    .then(() => console.log( `Connected to MongoDB`))
    .catch((err) => console.log(`Error connecting to MongoDB`, err));
}