import mongoose, { Schema } from "mongoose";


const months=['Baishakh','Jestha','Asadhh','Shrawan','Bhadra','Ashwin','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'];

const recordFetch={};
months.forEach((month)=>{
    recordFetch[month]={
        adm_fee:{type:Number,default:0},
        month_fee:{type:Number,default:0},
        comp_fee:{type:Number,default:0}
    }
})

const classFeeSchema=new mongoose.Schema({
    studentID:{
        type:Schema.Types.ObjectId,
        ref:"students",
        required:true,
        unique:true
    },
    records:recordFetch
})

const classFee_model=mongoose.model("classfees",classFeeSchema);

export default classFee_model;