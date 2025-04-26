import adminSchema_model from "../../database/mongoose_schema/admin_schema.js";
import notice_model from "../../database/mongoose_schema/notice_schema.js";

"notices/getallNotices"

const noticeFetchController = async (req, res) => {
  try {
    let result = null;

    if (!Object.keys(req.cookies).length) {
      result = await notice_model.find({ targetaudience: "All" });
    } else if (req.cookies.teacherToken) {
      result = await notice_model.find({
        targetaudience: { $in: ["All", "Teachers & Staffs"] },
      });
    } else if (req.cookies.adminToken) {
      result = await notice_model.find({
        targetaudience: { $in: ["All", "Teachers & Staffs", "Students"] },
      });
    } else {
      result = await notice_model.find({
        targetaudience: { $in: ["All", "Students"] },
      });
    }

    // Properly await all admin lookups
    const finalResult = await Promise.all(
      result.map(async (notice) => {
        const adminData = await adminSchema_model.findById(notice.adminID);
        return {
          ...notice.toObject(), 
          adminName: adminData?.name || "Unknown",
        };
      })
    );
    res.json(finalResult)
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default noticeFetchController;
