import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import edit_salary_fee_controller from "../../../controllers/teachersData/salary_edit_controller.js";

const salary_edit=express.Router();

salary_edit.patch("/:id",tokenVerify,edit_salary_fee_controller)


export default salary_edit;