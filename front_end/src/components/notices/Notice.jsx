import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NoticeMap from "./NoticeMap";
import { contextCreate } from "../../Context";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const {mode, setMode,userType} = useContext(contextCreate);
  useEffect(() => {
    const renderNotices = async () => {
      let response = null;
      try {
        if (userType.length === 0) {
          response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/get/notices`);
        } else if (userType==="teacher") {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/get/notices/teachers`,
            { withCredentials: true }
          );
        } else if (userType==="admin") {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/get/notices/admins`,
            { withCredentials: true }
          );
        } else {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/get/notices/students`,
            { withCredentials: true }
          );
        }
        setNotices(response.data);
        console.log(response.data);
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
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 ${
      mode === 'light' 
        ? 'bg-gray-50' 
        : 'bg-gray-900'
    }`}>
      <h1 className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${
        mode === 'light' 
          ? 'text-gray-800' 
          : 'text-white'
      }`}>
        School Notices
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {notices &&
          notices.map((notice) => (
            <NoticeMap
              key={notice.date}
              adminName={notice.adminName}
              noticetitle={notice.noticetitle}
              noticecategory={notice.noticecategory}
              noticedes={notice.noticedes}
              attachments={notice.attachments}
              date={notice.date}
            />
          ))}
      </div>
    </div>
  ) : (
    <div className={`min-h-screen flex flex-col justify-center items-center p-4 ${
      mode === 'light' 
        ? 'bg-gray-50' 
        : 'bg-gray-900'
    }`}>
      <div className="text-center space-y-4">
        <svg
          className={`w-16 h-16 mx-auto mb-4 ${
            mode === 'light' 
              ? 'text-gray-400' 
              : 'text-gray-600'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h1 className={`text-2xl sm:text-3xl font-semibold ${
          mode === 'light' 
            ? 'text-gray-600' 
            : 'text-gray-300'
        }`}>
          No Notices Available
        </h1>
        <p className={`${
          mode === 'light' 
            ? 'text-gray-500' 
            : 'text-gray-400'
        }`}>
          Check back later for updates
        </p>
      </div>
    </div>
  );
};

export default Notice;
