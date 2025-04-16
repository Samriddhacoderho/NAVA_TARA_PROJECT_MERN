import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

const connectTo=async()=>{
    await mongoose.connect(process.env.URI).then(()=>console.log("Connected to db successfully")).catch((e)=>console.log(e.message))
}

export default connectTo