import express from "express";
import emailCheckContr from "../../controllers/resetPass/email_check_controller.js";

const email_ask_Route=express.Router();

email_ask_Route.get("/:email",emailCheckContr)  

export default email_ask_Route;
