import mongoose from "mongoose";

export function connect() {
    mongoose

    .connect(process.env.MONGODB_URI! , {
        tls: true,
    })
    
    .then(() => console.log( "Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
}




    // const connection: { isConnected?: number } = {} ;

    // async function dbConnect() {
    // if (connection .isConnected){
    //     return;
    // }
    // const db = await mongoose.connect(process.env.MONGODB_URI!);

    // connection.isConnected = db.connections[0]?.readyState;

    // }

    // export default dbConnect;