import studentSchema_model from "../../database/mongoose_schema/student_schema.js";

const editStudentController=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await studentSchema_model.updateOne({_id:req.params.id},req.body,{runValidators:true});
            if(!result.modifiedCount)
            {
                res.status(404).send("There were no updates in the data.")
            }
            else
            {
                res.send("Updated Account Successfully");
            }
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}

export default editStudentController;