import express from "express";
import emailCheckContr from "../../controllers/resetPass/email_check_controller.js";
import passUpdate_controller from "../../controllers/resetPass/pass_update_controller.js";

const email_ask_Route=express.Router();

email_ask_Route.get("/:email",emailCheckContr)  
email_ask_Route.patch("/:email",passUpdate_controller)

export default email_ask_Route;
