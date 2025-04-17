import express from "express";
import teachersSchema_model from "../database/mongoose_schema/teachers_schema.js";
import adminSchema_model from "../database/mongoose_schema/admin_schema.js";
import studentSchema_model from "../database/mongoose_schema/student_schema.js";
import teacher_controller from "../controllers/login_roles/teacher_controller.js";
import admin_controller from "../controllers/login_roles/admin_controller.js";
import student_controller from "../controllers/login_roles/student_controller.js";

const loginMiddleware=async(req,res)=>{
    try {
        let result=await teachersSchema_model.findOne({email:req.body.email})
        if(result)
        {
            req.userType="teacher";
            req.data=result
            return teacher_controller(req,res)
        }
        result=await adminSchema_model.findOne({email:req.body.email})
        if(result)
        {
            req.userType="admin";
            req.data=result
            return admin_controller(req,res)
        }
        result=await studentSchema_model.findOne({email:req.body.email})
        if(result)
        {
            req.userType="student";
            req.data=result
            return student_controller(req,res)
        }

        return res.status(404).send("Invalid Email ID or Password")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default loginMiddleware;