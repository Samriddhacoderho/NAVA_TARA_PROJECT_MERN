import express from "express";
import tokenVerify from "../tokens/token_verify.js";

const get_id=express.Router();

get_id.get("/fromtoken",tokenVerify,async(req,res)=>{
    try {
        res.send(req.user.id);
    } catch (error) {
        alert(error.message);
    }
})

export default get_id