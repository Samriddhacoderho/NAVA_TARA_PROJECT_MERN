const logoutController = async (req, res) => {
  try {
    let cleared = false;

    if (req.cookies.teacherToken) {
      res.clearCookie("teacherToken", { sameSite: "strict", secure: true });
      cleared = true;
    }

    if (req.cookies.adminToken) {
      res.clearCookie("adminToken", { sameSite: "strict", secure: true });
      cleared = true;
    }

    if (req.cookies.studentToken) {
      res.clearCookie("studentToken", { sameSite: "strict", secure: true });
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
