import studentSchema_model from "../../database/mongoose_schema/student_schema.js";
import studentFee_model from "../../database/mongoose_schema/studentFeeRecord_schema.js";

const studentAccountDeleteController = async (req, res) => {
    try {
        if(req.admin)
        {
            const main_acc=await studentSchema_model.deleteOne({_id:req.params.id});
            if(main_acc.deletedCount)
            {
                const fees_acc=await studentFee_model.deleteOne({studentID:req.params.id});
                if(fees_acc.deletedCount)
            {
                return res.status(200).send("Student account deleted successfully");
            }
            }
            
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}

export default studentAccountDeleteController;