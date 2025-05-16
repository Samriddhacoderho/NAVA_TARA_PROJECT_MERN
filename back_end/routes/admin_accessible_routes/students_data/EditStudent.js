import express from "express";
import editStudentController from "../../../controllers/studentsData/editStudentData.js";
import tokenVerify from "../../../tokens/token_verify.js";

const edit_student=express.Router();

edit_student.patch("/:id",tokenVerify,editStudentController)

export default edit_student