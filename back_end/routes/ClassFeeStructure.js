import express from "express";
import tokenVerify from "../tokens/token_verify.js";
import class_fee_structController from "../controllers/admin/class_fee_struct_controller.js";

const class_fee_struct=express.Router();


class_fee_struct.get("/structure/fees/:class_name",tokenVerify,class_fee_structController)

export default class_fee_struct;