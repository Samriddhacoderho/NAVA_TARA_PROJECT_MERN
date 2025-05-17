import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import salaryViewController from "../../../controllers/teachersData/salary_view_controller.js";

const get_salary=express.Router();

get_salary.get("/:id",tokenVerify,salaryViewController);

export default get_salary;