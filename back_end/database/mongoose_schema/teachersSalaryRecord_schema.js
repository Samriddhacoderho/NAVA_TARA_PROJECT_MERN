import mongoose, { Schema } from "mongoose";


const months=['Baishakh','Jestha','Asadhh','Shrawan','Bhadra','Ashwin','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'];

const recordFetch={};
months.forEach((month)=>{
    recordFetch[month]={
        salary:{type:Number,default:0},
        allowance:{type:Number,default:0},
    }
})

const teacherFeeSchema=new mongoose.Schema({
    teacherID:{
        type:Schema.Types.ObjectId,
        ref:"teachers",
        required:true,
        unique:true
    },
    records:recordFetch
})

const teacherFee_model=mongoose.model("teachersalaries",teacherFeeSchema);

export default teacherFee_model;