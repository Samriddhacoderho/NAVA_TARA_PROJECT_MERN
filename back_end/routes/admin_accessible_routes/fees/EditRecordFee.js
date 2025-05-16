import express from "express";
import edit_record_fee_controller from "../../../controllers/admin/edit_record_fee_controller.js";
import tokenVerify from "../../../tokens/token_verify.js";

const edit_record_fee=express.Router();


edit_record_fee.patch("/:id",tokenVerify,edit_record_fee_controller);


export default edit_record_fee;