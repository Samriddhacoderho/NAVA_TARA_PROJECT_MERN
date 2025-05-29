import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";
import adminSchema_model from "../../database/mongoose_schema/admin_schema.js";
import studentSchema_model from "../../database/mongoose_schema/student_schema.js";
import student_controller from "./student_login_controller.js";
import teacher_controller from "./teacher_login_controller.js";
import admin_controller from "./admin_login_controller.js";


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

        return res.status(404).send("Invalid Email ID or Password 1")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default loginMiddleware;