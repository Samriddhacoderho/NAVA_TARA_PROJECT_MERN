import mongoose from "mongoose";

const teachersSchema=new mongoose.Schema({
    email:{
        type:"String",
        required:"true",
        unique:"true"
    },
    password:{
        type:"String",
        required:"true"
    }
})

const teachersSchema_model=mongoose.model("teachers",teachersSchema)


export default teachersSchema_model