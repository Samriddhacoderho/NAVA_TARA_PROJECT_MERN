import adminSchema_model from "../../database/mongoose_schema/admin_schema.js";
import studentSchema_model from "../../database/mongoose_schema/student_schema.js";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";
import bcrypt from "bcryptjs";

const passUpdate_controller = async (req, res) => {
  try {
    let result = null;
    if (req.query.role === "admin") {
      result = await adminSchema_model.findOne({ email: req.params.email });
    } else if (req.query.role === "teacher") {
      result = await teachersSchema_model.findOne({ email: req.params.email });
    } else {
      result = await studentSchema_model.findOne({ email: req.params.email });
    }
    if (await bcrypt.compare(req.body.newPass,result.password)) {
      return res.status(404).send("New and old passwords cannot be same.");
    } else {
      result.password = req.body.newPass;
      await result.save();
      res.send("Password changed successfully");
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default passUpdate_controller;
