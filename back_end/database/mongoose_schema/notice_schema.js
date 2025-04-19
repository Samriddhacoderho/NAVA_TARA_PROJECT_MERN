import mongoose, { Schema } from "mongoose";

const noticeSchema=new mongoose.Schema({
    adminID:{
        type:Schema.Types.ObjectId,
        ref:"admins",
        required:true
    },
    noticecategory:{
        type:String,
        required:true
    },
    targetaudience:{
        type:String,
        required:true
    },
    noticetitle:{
        type:String,
        required:true
    },
    noticedes:{
        type:String,
        required:true
    },
    attachments:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

const notice_model=mongoose.model("notices",noticeSchema)


export default notice_model