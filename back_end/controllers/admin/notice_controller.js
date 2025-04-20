import notice_model from "../../database/mongoose_schema/notice_schema.js";

const noticeController = async (req, res) => {
  try {
    let result = null;
    if (req.file) {
      result = await notice_model.create({
        adminID: req.user.id,
        noticecategory: req.body.noticecategory,
        targetaudience: req.body.targetaudience,
        noticetitle: req.body.noticetitle,
        noticedes: req.body.noticedes,
        attachments: req.file.originalname,
      });
    } else {
      result = await notice_model.create({
        adminID: req.user.id,
        noticecategory: req.body.noticecategory,
        targetaudience: req.body.targetaudience,
        noticetitle: req.body.noticetitle,
        noticedes: req.body.noticedes,
      });
    }
    res.json({ alertMsg: "Posted Notice Successfully", dateOF: result.date });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default noticeController;
