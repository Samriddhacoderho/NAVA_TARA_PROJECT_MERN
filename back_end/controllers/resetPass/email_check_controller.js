import nodemailer from "nodemailer";
import fs from "fs";
import adminSchema_model from "../../database/mongoose_schema/admin_schema.js";
import teachersSchema_model from "../../database/mongoose_schema/teachers_schema.js";
import studentSchema_model from "../../database/mongoose_schema/student_schema.js";

const emailCheckContr = async (req, res) => {
  let htmlContent = fs.readFileSync("htmlEmail.html", "utf-8");
  const resetCode = Math.floor(100000 + Math.random() * 900000);
  htmlContent = htmlContent.replace("{{CODE}}", resetCode);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: req.params.email,
    subject: "Reset Password Verification Code",
    text: "Hello",
    html: htmlContent,
  };
  try {
    let result = null;
    let found = "";
    result = await adminSchema_model.findOne({ email: req.params.email });
    if (result) {
      found = "admin";
    } else {
      result = await teachersSchema_model.findOne({ email: req.params.email });
      if (result) {
        found = "teacher";
      } else {
        result = await studentSchema_model.findOne({ email: req.params.email });
        if (result) {
          found = "student";
        }
      }
    }
    if (found.length>0) {
      await transporter.sendMail(mailOptions);
      res.json({ resetCode: resetCode,role:found });
    } else {
      return res
        .status(504)
        .send("This email is not registered in our application!");
    }
  } catch (error) {
    res.status(504).send(error.message);
  }
};

export default emailCheckContr;
