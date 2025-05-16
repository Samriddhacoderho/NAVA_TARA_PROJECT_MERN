import express from "express";
import loginMiddleware from "../../controllers/login/login_before_roll_assign_controller.js";

const loginRoute=express.Router();

loginRoute.post("/login",loginMiddleware)

export default loginRoute;