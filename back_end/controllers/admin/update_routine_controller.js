import routine_schema from "../../database/mongoose_schema/routine_schema.js";

const updateRoutine_controller = async (req, res) => {
  try {
    if (req.admin) {
      const result = await routine_schema.findOneAndUpdate(
        { teacherID: req.params.teacherID },
        { schedule: req.body.data }
      );
      res.send("Routine Updated");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default updateRoutine_controller;
