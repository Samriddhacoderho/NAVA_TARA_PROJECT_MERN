import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"

const adminSchema=new mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true,
        validate:[validator.isStrongPassword,"Please provide a stronger password that has atleast one uppercase, one lowercase, one symbol, and one number"]
    }
})

adminSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next()
    }
    else
    {
        const hashedPass=await bcrypt.hash(this.password,10);
        this.password=hashedPass;
        next()
    }
})

const adminSchema_model=mongoose.model("admins",adminSchema)


export default adminSchema_model