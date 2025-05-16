import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import getFeeController from "../../../controllers/studentsData/getFeeController.js";

const get_fee=express.Router();

get_fee.get("/:id",tokenVerify,getFeeController);

export default get_fee