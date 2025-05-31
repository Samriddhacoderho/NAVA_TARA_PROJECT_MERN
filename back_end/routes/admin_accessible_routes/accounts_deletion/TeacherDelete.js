import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import teacherAccountDeleteController from "../../../controllers/delete_account/teacher_Account_Delete_controller.js";

const delete_teacher = express.Router();

delete_teacher.delete("/:id",tokenVerify,teacherAccountDeleteController);

export default delete_teacher;