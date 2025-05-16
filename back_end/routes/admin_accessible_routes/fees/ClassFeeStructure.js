import express from "express";
import tokenVerify from "../../../tokens/token_verify.js";
import class_fee_structController from "../../../controllers/admin/class_fee_struct_controller.js";
import edit_class_fee_struct_Controller from "../../../controllers/admin/edit_classFee_controller.js";

const class_fee_struct=express.Router();


class_fee_struct.get("/structure/fees/:class_name",tokenVerify,class_fee_structController)

class_fee_struct.patch("/edit/fee/:class_name",tokenVerify,edit_class_fee_struct_Controller)

export default class_fee_struct;