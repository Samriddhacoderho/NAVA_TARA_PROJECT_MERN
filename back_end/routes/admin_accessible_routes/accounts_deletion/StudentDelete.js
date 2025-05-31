import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import studentAccountDeleteController from "../../../controllers/delete_account/student_Account_Delete_controller.js";

const delete_student = express.Router();

delete_student.delete("/:id",tokenVerify,studentAccountDeleteController);

export default delete_student;