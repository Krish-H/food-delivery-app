import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://krish:n3h7rxmongo@cluster0.5foer7e.mongodb.net/food-del')
    .then(()=>console.log("db connect "))
}