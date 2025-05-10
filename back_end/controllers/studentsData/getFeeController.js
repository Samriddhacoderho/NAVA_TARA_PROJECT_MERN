import studentFee_model from "../../database/mongoose_schema/studentFeeRecord_schema.js";

const getFeeController = async (req, res) => {
  try {
    if (req.admin) {
      const result = await studentFee_model.find({ studentID: req.params.id });
      res.json(result);
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default getFeeController;
