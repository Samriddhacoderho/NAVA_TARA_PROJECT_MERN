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

const studentFeeSchema=new mongoose.Schema({
    studentID:{
        type:Schema.Types.ObjectId,
        ref:"students",
        required:true,
        unique:true
    },
    records:recordFetch
})

const studentFee_model=mongoose.model("studentfees",studentFeeSchema);

export default studentFee_model;