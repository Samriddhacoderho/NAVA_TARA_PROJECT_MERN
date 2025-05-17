import adminSchema_model from "../../database/mongoose_schema/admin_schema.js";

const admin_create_controller=async(req,res)=>{
    try {
        if(req.admin)
        {
            const result=await adminSchema_model.create(req.body);
            res.send("Admin Account Creation Successful");
        }
    } catch (error) {
        res.status(504).send(error.message);
    }
}


export default admin_create_controller;

