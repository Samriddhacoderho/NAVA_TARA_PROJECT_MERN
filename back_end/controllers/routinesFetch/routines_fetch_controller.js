import routine_schema from "../../database/mongoose_schema/routine_schema.js";

const routine_fetch_controller = async (req, res) => {
  try {
    const result_find = await routine_schema.find({
      teacherID: req.params.teacherID,
    });
    
    res.send(result_find);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default routine_fetch_controller;
