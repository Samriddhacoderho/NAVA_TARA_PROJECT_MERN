import mongoose from "mongoose";

const classFeeSchema=new mongoose.Schema({
    class_name:{
        type:Number,
        required:true,
        unique:true,
    },
    admisssion_fee:{
        type:Number,
        required:true,
        default:0,
    },
    monthly_fee:{
        type:Number,
        required:true,
        default:0
    },
    comp_fee:{
        type:Number,
        default:0
    }
})

classFeeSchema.pre("save",async function(next){
    this.total=this.admisssion_fee+this.monthly_fee*12+this.comp_fee
})


const classFee_model=mongoose.model("classstructurefees",classFeeSchema);

export default classFee_model;