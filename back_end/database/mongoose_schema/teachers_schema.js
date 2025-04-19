import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"

const teachersSchema=new mongoose.Schema({
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

teachersSchema.pre("save",async function(next){
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

const teachersSchema_model=mongoose.model("teachers",teachersSchema)


export default teachersSchema_model