import mongoose from "mongoose";

export function connect() {
    mongoose

    .connect(process.env.MONGO_URL! , {
        tls: true,
    })
    
    .then(() => console.log( "Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
}