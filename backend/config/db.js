import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongoDB_connection')
    .then(()=>console.log("db connect "))
}
