import studentSchema_model from "../../database/mongoose_schema/student_schema.js";
import studentFee_model from "../../database/mongoose_schema/studentFeeRecord_schema.js";

const student_accountCreate=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await studentSchema_model.create(req.body);
            const resultfeeStruct=await studentFee_model.create({studentID:result._id})
            res.send("Student Account Creation Successful");
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}


export default student_accountCreate;