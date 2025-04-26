import routine_schema from "../../database/mongoose_schema/routine_schema.js"

const routine_fetch_controller=async(req,res)=>{
    try {
        const result=await routine_schema.create({teacherID:req.params.teacherID,schedule:req.body});
        res.send("Routine Inserted Successfully");
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default routine_fetch_controller