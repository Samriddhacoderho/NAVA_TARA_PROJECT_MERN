import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import admin_create_controller from "../../../controllers/admin/admin_account_create_controller.js";
const create_admin=express.Router();


create_admin.post("/admin",tokenVerify,admin_create_controller)

export default create_admin