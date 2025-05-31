import routine_schema from "../../database/mongoose_schema/routine_schema.js";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";
import teacherFee_model from "../../database/mongoose_schema/teachersSalaryRecord_schema.js";

const teacherAccountDeleteController = async (req, res) => {
    try {
        if(req.admin)
        {
            const main_acc=await teachersSchema_model.deleteOne({_id:req.params.id});
            if(main_acc.deletedCount)
            {
                const record_acc=await teacherFee_model.deleteOne({teacherID:req.params.id});
                if(record_acc.deletedCount)
            {
                const routine_acc=await routine_schema.deleteOne({teacherID:req.params.id});
                if(routine_acc.deletedCount)
                {
                    return res.status(200).send("Teacher account deleted successfully");
                }
            }
            }
            
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}

export default teacherAccountDeleteController;