import routine_schema from "../../database/mongoose_schema/routine_schema.js";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";
import teacherFee_model from "../../database/mongoose_schema/teachersSalaryRecord_schema.js";

const teacher_acc_create=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await teachersSchema_model.create(req.body);
            const routineCreate=await routine_schema.create({teacherID:result._id})
            const salaryCreate=await teacherFee_model.create({teacherID:result._id})
            res.send("Teacher Account Creation Successful")
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}


export default teacher_acc_create