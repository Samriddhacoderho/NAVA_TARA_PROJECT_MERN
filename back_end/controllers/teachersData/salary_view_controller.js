import teacherFee_model from "../../database/mongoose_schema/teachersSalaryRecord_schema.js";

const salaryViewController = async (req, res) => {
  try {
    if (req.admin) {
      const result = await teacherFee_model.find({ teacherID: req.params.id });
      res.json(result);
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default salaryViewController;
