import axios from "axios";
import React, { useEffect, useState } from "react";
import NoAccess from "../NoAccess";

const TeacherPayroll = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const [teachers, setTeachers] = useState([]);
  const [btnClick, setbtnClick] = useState(false);
  const [record, setRecord] = useState([]);
  const [show,setShowMsg]=useState("Show");
  const months = [
    "Baishakh",
    "Jestha",
    "Asadhh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];
  useEffect(() => {
    const view_teachers_func = async () => {
      try {
        const teachersData = await axios.get(
          "http://localhost:8000/getTeachers",
          {
            withCredentials: true,
          }
        );
        setTeachers(teachersData.data);
      } catch (error) {
        if (error.teachersData) {
          alert(error.teachersData.data);
        } else {
          alert(error.message);
        }
      }
    };

    view_teachers_func();
  }, []);
  const handleViewPayments = async (id) => {
    try {
      if(show==="Show")
      {
        setShowMsg("Hide")
      }
      else
      {
        setShowMsg("Show");
      }
      setbtnClick(!btnClick)
      const response = await axios.get(
        `http://localhost:8000/getSalary/${id}`,
        { withCredentials: true }
      );
      setRecord(response.data);
    } catch (error) {
        alert(error.message)
    }
  };
  return adminLoggedIn ? (
    <div className="max-w-7xl bg-gradient-to-r from-blue-100 to-purple-200 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Teachers Name */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            👨‍🏫 Select a Teacher
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {teachers &&
              teachers.map((teacher) => {
                return (
                  <button
                    key={teacher._id}
                    onClick={() => handleViewPayments(teacher._id)}
                    className="
        relative inline-flex items-center justify-center
        p-2 w-full
        text-sm font-semibold rounded-lg
        bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700
        text-white shadow-md
        hover:from-indigo-600 hover:via-purple-700 hover:to-blue-600
        focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
                  >
                    {teacher.name}
                  </button>
                );
              })}
          </div>
        </div>

        {btnClick && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-red-300">
            <h2 className="text-2xl font-semibold text-red-800 mb-6">
              📋 Payment Records
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                {record && months.map((month) => 
                    record.map((rec)=>{
                      const totalSalary_month=rec.records[month].salary+rec.records[month].allowance
                        return(<div key={month} className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                    <span>
                      📅 {month}: {totalSalary_month>0?<strong>RS {totalSalary_month}</strong>:<strong>RS XXX</strong>}
                    </span>
                    {totalSalary_month>0 && <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                      Edit
                    </button>}
                    {totalSalary_month<=0 && <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                      Add
                    </button>}
                  </div>)
                    })
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {btnClick && (
        <div className="flex justify-center items-center mt-5">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Back
            </span>
          </button>
        </div>
      )}
    </div>
  ) : (
    <NoAccess/>
  );
};

export default TeacherPayroll;
