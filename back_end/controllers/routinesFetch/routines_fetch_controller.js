import routine_schema from "../../database/mongoose_schema/routine_schema.js";

const routine_fetch_controller = async (req, res) => {
  try {
    let result_find = null;
    if (req.params.id) {
      if (req.admin) {
         result_find = await routine_schema.find({
          teacherID: req.params.id,
        });
      }
    } else {
        result_find = await routine_schema.find({
          teacherID: req.user.id,
        });
    }

    res.send(result_find);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default routine_fetch_controller;
