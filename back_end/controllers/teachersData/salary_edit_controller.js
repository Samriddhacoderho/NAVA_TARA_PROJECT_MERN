import teacherFee_model from "../../database/mongoose_schema/teachersSalaryRecord_schema.js";

const edit_salary_fee_controller=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await teacherFee_model.updateOne({teacherID:req.params.id},req.body,{runValidators:true});
            if(!result.modifiedCount)
            {
                res.status(504).send("No Updates were made");
            }
            else
            {
                res.send("Updated Successfully");
            }
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}

export default edit_salary_fee_controller;