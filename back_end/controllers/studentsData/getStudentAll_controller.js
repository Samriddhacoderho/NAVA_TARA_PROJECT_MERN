import studentSchema_model from "../../database/mongoose_schema/student_schema.js";

const getStudentAll=async(req,res)=>{
    try {
        if(req.admin || req.teacher)
        {
            const result=await studentSchema_model.find({class_name:req.params.class_name},{password:0}).sort({name:1});
            res.json(result);
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}

export default getStudentAll;