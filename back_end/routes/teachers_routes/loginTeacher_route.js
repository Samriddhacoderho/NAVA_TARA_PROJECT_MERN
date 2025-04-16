import express from "express";
import loginTeacherController from "../../controllers/teachers_controller/loginTeacher_controller.js";

const router_teachersLogin=express.Router()

router_teachersLogin.post("/login",loginTeacherController)


export default router_teachersLogin