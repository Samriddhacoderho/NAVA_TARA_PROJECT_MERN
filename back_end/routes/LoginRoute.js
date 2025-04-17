import express from "express";
import loginMiddleware from "../controller_middleware/login_middleware.js";

const loginRoute=express.Router();

loginRoute.post("/login",loginMiddleware)

export default loginRoute;