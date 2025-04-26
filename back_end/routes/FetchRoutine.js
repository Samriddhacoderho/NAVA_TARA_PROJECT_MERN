import express from "express";
import routine_fetch_controller from "../controllers/routinesFetch/routines_fetch_controller.js";
import tokenVerify from "../tokens/token_verify.js";

const fetch_routine=express.Router();


fetch_routine.get("/routines/:teacherID",tokenVerify,routine_fetch_controller)


export default fetch_routine;

