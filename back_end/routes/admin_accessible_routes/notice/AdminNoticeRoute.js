import express from "express"
import multer from "multer"
import path from "path"
import noticeController from "../../../controllers/admin/notice_controller.js"
import tokenVerify from "../../../tokens/token_verify.js"

const admin_notice_route=express.Router()


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(process.cwd(),"public","notice_files"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

admin_notice_route.post("/create-notice",tokenVerify,upload.single("attachments"),noticeController)


export default admin_notice_route