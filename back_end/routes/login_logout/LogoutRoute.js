import express from "express";
import logoutController from "../../controllers/logout/logout_controller.js";

const logoutRoute=express.Router()

logoutRoute.post("/logout",logoutController)

export default logoutRoute