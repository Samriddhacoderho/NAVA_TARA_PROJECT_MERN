import axios from "axios";
import React, { useEffect, useState } from "react";
import NoAccess from "../NoAccess";

const RoutineEdit = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const days = [
    { name: "Sunday", color: "bg-teal-500" },
    { name: "Monday", color: "bg-purple-500" },
    { name: "Tuesday", color: "bg-orange-500" },
    { name: "Wednesday", color: "bg-blue-500" },
    { name: "Thursday", color: "bg-black" },
    { name: "Friday", color: "bg-red-500" },
  ];
  const periods = [
    "period1",
    "period2",
    "period3",
    "period4",
    "period5",
    "period6",
    "period7",
  ];
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchTeacherName = async () => {
      try {
        if (adminLoggedIn) {
          const teachersData = await axios.get(
            "http://localhost:8000/getTeachers",
            { withCredentials: true }
          );
          setTeachers(teachersData.data);
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    };

    fetchTeacherName();
  }, []);
  return teachers && adminLoggedIn ? (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
        <select
          name="teachers"
          id="teachers"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 mb-4"
        >
          <option value="">Select a teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher._id}>
              {teacher.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  ) : (
    <NoAccess />
  );
};

export default RoutineEdit;
