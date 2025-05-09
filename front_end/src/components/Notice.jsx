import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeMap from "./NoticeMap";

const Notice = () => {
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const adminLoggedIn = document.cookie.includes("adminToken");
  const studentLoggedIn = document.cookie.includes("studentToken");
  const [notices, setNotices] = useState([]);
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
          response = await axios.get(
            "http://localhost:8000/get/notices/admins",
            { withCredentials: true }
          );
        } else {
          response = await axios.get(
            "http://localhost:8000/get/notices/students",
            { withCredentials: true }
          );
        }
        setNotices(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.repsonse.data);
        } else {
          alert(error.message);
        }
      }
    };

    renderNotices();
  }, []);
  return notices.length ? (
    <div>
      <h1 className="text-black text-3xl mb-6 text-center">Notices</h1>
      <div className="grid grid-cols-3 gap-3">
        {notices &&
          notices.map((notice) => {
            return (
              <div key={notice.date}>
                <NoticeMap
                  adminName={notice.adminName}
                  noticetitle={notice.noticetitle}
                  noticecategory={notice.noticecategory}
                  noticedes={notice.noticedes}
                  attachments={notice.attachments}
                  date={notice.date}
                />
              </div>
            );
          })}
      </div>
      {console.log(notices)}
    </div>
  ) : (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-500 text-3xl mb-6 text-center">
        No Notices Available...
      </h1>
    </div>
  );
};

export default Notice;
