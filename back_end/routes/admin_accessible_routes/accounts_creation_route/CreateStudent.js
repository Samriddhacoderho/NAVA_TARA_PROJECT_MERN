import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import student_accountCreate from "../../../controllers/admin/student_account_create_controller.js";

const create_student=express.Router();

create_student.post("/student",tokenVerify,student_accountCreate);

export default create_student;