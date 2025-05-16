import express from "express"
import tokenVerify from "../../tokens/token_verify.js";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";

const fetch_teachers=express.Router()

fetch_teachers.get("/",tokenVerify,async(req,res)=>{
    try {
        const result=await teachersSchema_model.find({},{password:0});
        res.send(result);
    } catch (error) {
        
    }
})


export default fetch_teachers;