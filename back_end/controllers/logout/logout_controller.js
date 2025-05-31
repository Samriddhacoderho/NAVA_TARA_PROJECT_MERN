const logoutController = async (req, res) => {
  try {
    let cleared = false;

    if (req.cookies.teacherToken) {
      res.clearCookie("teacherToken", { httpOnly:true,sameSite: "none", secure: true });
      cleared = true;
    }

    if (req.cookies.adminToken) {
      res.clearCookie("adminToken", { httpOnly:true,sameSite: "none", secure: true });
      cleared = true;
    }

    if (req.cookies.studentToken) {
      res.clearCookie("studentToken", { httpOnly:true,sameSite: "none", secure: true });
      cleared = true;
    }

    if (cleared) {
      return res.status(200).send("Logged out successfully");
    } else {
      return res.status(400).send("No login token found");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default logoutController;
