import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import getStudentAll from "../../../controllers/studentsData/getStudentAll_controller.js";

const get_student=express.Router();

get_student.get("/:class_name",tokenVerify,getStudentAll)

export default get_student;