import express from "express";
import teacher_acc_create from "../../../controllers/admin/teacher_account_create_controller.js";
import tokenVerify from "../../../tokens/token_verify.js";
const create_teacher=express.Router();


create_teacher.post("/teacher",tokenVerify,teacher_acc_create)

export default create_teacher