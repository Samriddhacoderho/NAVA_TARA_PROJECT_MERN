import React, { useEffect } from "react";
import axios from "axios";

const Notice = () => {
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const adminLoggedIn = document.cookie.includes("adminToken");
  const studentLoggedIn = document.cookie.includes("studentToken");
  useEffect(() => {
    const renderNotices = async () => {
      let response = null;
      try {
        if (!teacherLoggedIn && !adminLoggedIn && !studentLoggedIn) {
          response = await axios.get("http://localhost:8000/get/notices");
        } else if (teacherLoggedIn) {
          response = await axios.get(
            "http://localhost:8000/get/notices/teachers",
            { withCredentials: true }
          );
        } else if (adminLoggedIn) {
          repsonse = await axios.get(
            "http://localhost:8000/get/notices/admins",
            { withCredentials: true }
          );
        } else {
          response = await axios.get(
            "http://localhost:8000/get/notices/students",
            { withCredentials: true }
          );
        }
        response.data?console.log(response.data):console.log("No notices until now");
      } catch (error) {
        if (error.repsonse) {
          alert(error.repsonse.data);
        } else {
          alert(error.message);
        }
      }
    };

    renderNotices();
  }, []);
  return <div>hihih</div>;
};

export default Notice;
