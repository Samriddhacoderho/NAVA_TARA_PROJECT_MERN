import bcrypt from "bcryptjs";
import token_login from "../../tokens/token_roleslogin/loginToken.js";

const student_controller = async (req, res) => {
  try {
    if (!await bcrypt.compare(req.body.password,req.data.password)) {
      return res.status(404).send("Invalid Email ID or Password");
    }
    return token_login(req, res);
  } catch (error) {
    console.log(error.message);
  }
};

export default student_controller;
