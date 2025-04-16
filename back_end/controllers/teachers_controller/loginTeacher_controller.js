import express from "express";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";

const loginTeacherController=async(req,res)=>{
    try {
        console.log(req.body)
        const result=await teachersSchema_model.create(req.body)
        res.send("Inserted Data Successfully")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default loginTeacherController