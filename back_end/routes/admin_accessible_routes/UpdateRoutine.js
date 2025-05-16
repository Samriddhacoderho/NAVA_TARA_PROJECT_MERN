import express from "express";
import tokenVerify from "../../tokens/token_verify.js";
import updateRoutine_controller from "../../controllers/admin/update_routine_controller.js";

const updateRoutine=express.Router();

updateRoutine.patch("/:teacherID",tokenVerify,updateRoutine_controller)


export default updateRoutine