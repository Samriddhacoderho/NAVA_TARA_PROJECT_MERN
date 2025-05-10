import classFee_model from "../../database/mongoose_schema/class_fee_schema.js";

const getFeeController = async (req, res) => {
  try {
    if (req.admin) {
      const result = await classFee_model.find({ studentID: req.params.id });
      res.json(result);
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default getFeeController;
