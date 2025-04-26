import express from "express";
import routine_fetch_controller from "../controllers/routinesFetch/routines_fetch_controller.js";

const fetch_routine=express.Router();


fetch_routine.post("/routines/:teacherID",routine_fetch_controller)


export default fetch_routine;

