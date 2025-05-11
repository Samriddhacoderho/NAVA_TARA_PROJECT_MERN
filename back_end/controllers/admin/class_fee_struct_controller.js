import classFee_model from "../../database/mongoose_schema/classfee_structure_schema.js";

const class_fee_structController = async (req, res) => {
  try {
    if (req.admin) {
      const result = await classFee_model.findOne({
        class_name: req.params.class_name,
      });
      res.send(result);
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default class_fee_structController;
