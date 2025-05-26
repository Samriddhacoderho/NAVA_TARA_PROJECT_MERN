import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

const token_login = async (req, res) => {
  try {
    const pay_load = {
      user: {
        id: req.data._id,
      },
    };
    const token = jwt.sign(pay_load, process.env.SECRET_KEY);
    if (req.userType === "teacher") {
      res.cookie("teacherToken", token, {
        secure: true,
        sameSite: "None",
        secure:true
      });
    } else if (req.userType === "admin") {
      res.cookie("adminToken", token, {
        secure: true,
        sameSite: "None",
        secure:true
      });
    } else {
      res.cookie("studentToken", token, {
        secure: true,
        sameSite: "None",
        secure:true
      });
    }
    res.json({alertMsg:"Logged In Successfully",name:req.data.name})
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

export default token_login;
