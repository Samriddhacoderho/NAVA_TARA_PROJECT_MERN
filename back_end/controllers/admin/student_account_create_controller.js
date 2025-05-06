import studentSchema_model from "../../database/mongoose_schema/student_schema.js";

const student_accountCreate=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await studentSchema_model.create(req.body);
            res.send("Student Account Creation Successful");
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}


export default student_accountCreate;