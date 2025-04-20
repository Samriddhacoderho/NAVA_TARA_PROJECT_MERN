import notice_model from "../../database/mongoose_schema/notice_schema.js";

const noticeFetchController = async (req, res) => {
  try {
    if (!req.cookies) {
      const result = await notice_model.find({ targetaudience: "All" });
      return res.json(result);
    }
    if (req.cookies.teacherToken) {
      const result = await notice_model.find({
        targetaudience: { $in: ["All", "Teachers & Staffs"] },
      });
      return res.json(result);
    }
    if (req.cookies.adminToken) {
      const result = await notice_model.find({
        targetaudience: { $in: ["All", "Teachers & Staffs", "Students"] },
      });
      return res.json(result);
    }
    if (req.cookies.studentToken) {
      const result = await notice_model.find({
        targetaudience: { $in: ["All", "Students"] },
      });
      return res.json(result);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default noticeFetchController;
