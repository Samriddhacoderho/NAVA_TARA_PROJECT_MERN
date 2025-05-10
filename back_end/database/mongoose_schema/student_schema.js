import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"

const studentSchema=new mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    class_name:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    father_phone:{
        type:Number,
        required:true
    },
    mother_name:{
        type:String,
        required:true,
        unique:true
    },
    mother_phone:{
        type:Number,
        required:true,
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    totalFee:{
        type:Number,
        required:true
    },
    password:{
        type:"String",
        required:true,
        validate:[validator.isStrongPassword,"Please provide a stronger password that has atleast one uppercase, one lowercase, one symbol, and one number"]
    }
})

studentSchema.pre("save",async function(next){
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

const studentSchema_model=mongoose.model("students",studentSchema)


export default studentSchema_model