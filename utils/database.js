import mongoose from "mongoose";

let isConnected=false

export const connectToDB=async()=>{
    console.log("Mongo is already connected")
    return
}

try{
    await mongoose.connect('mongodb://localhost:27017/login')

    isConnected=true
    console.log("connected to mongodb successfully")
}
catch(e){
    console.log(e)
}