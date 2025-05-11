import classFee_model from "../../database/mongoose_schema/classfee_structure_schema.js";

const edit_class_fee_struct_Controller = async (req, res) => {
  try {
    if (req.admin) {
      const result = await classFee_model.findOne({
        class_name: req.params.class_name,
      });
      if(req.body.admission_fee==result.admission_fee && req.body.monthly_fee==result.monthly_fee && req.body.comp_fee==result.comp_fee)
      {
        res.status(504).send("There were no updates in the fee structure");
      }
      else
      {
        result.admission_fee=req.body.admission_fee;
        result.monthly_fee=req.body.monthly_fee;
        result.comp_fee=req.body.comp_fee;
        await result.save();
        res.send("Updated fee structure successfully");
      }
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default edit_class_fee_struct_Controller;
