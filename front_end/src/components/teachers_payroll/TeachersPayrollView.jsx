import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoAccess from "../NoAccess";
import TeacherPayrollEdit from "./TeacherPayrollEdit";
import { contextCreate } from "../../Context";

const TeacherPayrollView = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const [teachers, setTeachers] = useState([]);
  const [btnClick, setbtnClick] = useState(false);
  const [record, setRecord] = useState([]);
  const [teacherName, setTeacherName] = useState(null);
  const [showEdit, setshowEdit] = useState(false);
  const [monthRecord,setMonth]=useState(null);
  const {mode,setMode}=useContext(contextCreate)
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
        if (adminLoggedIn) {
          const teachersData = await axios.get(
            "http://localhost:8000/getTeachers",
            {
              withCredentials: true,
            }
          );
          setTeachers(teachersData.data);
        }
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
  const handleViewPayments = async (id, name) => {
    try {
      if (!btnClick) {
        setbtnClick(true);
      }
      const response = await axios.get(
        `http://localhost:8000/getSalary/${id}`,
        { withCredentials: true }
      );
      setRecord(response.data);
      setTeacherName(name);
    } catch (error) {
      alert(error.message);
    }
  };

  return adminLoggedIn ? (
    !showEdit ? (
      <div className={`min-h-screen py-10 px-4 ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teachers List Section */}
          <div className={`${
            mode === 'light'
              ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-blue-100'
              : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700'
          } rounded-2xl overflow-hidden`}>
            <div className={`p-6 ${
              mode === 'light'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                : 'bg-gradient-to-r from-blue-600 to-indigo-700'
            }`}>
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Select Teacher
              </h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-3">
                {teachers && teachers.map((teacher) => (
                  <button
                    key={teacher._id}
                    onClick={() => handleViewPayments(teacher._id, teacher.name)}
                    className={`group relative w-full px-6 py-4 rounded-xl transition-all transform hover:scale-[1.02] ${
                      mode === 'light'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-600'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-700'
                    } text-white shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium">{teacher.name}</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Records Section */}
          {btnClick && (
            <div className={`${
              mode === 'light'
                ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-pink-100'
                : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-pink-900'
            } rounded-2xl overflow-hidden`}>
              <div className={`p-6 ${
                mode === 'light'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600'
                  : 'bg-gradient-to-r from-pink-600 to-rose-700'
              }`}>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Payment Records - {teacherName}
                </h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {record && months.map((month) =>
                    record.map((rec) => {
                      const totalSalary_month = rec.records[month].salary + rec.records[month].allowance;
                      return (
                        <div key={month} className={`group p-4 rounded-xl transition-all ${
                          mode === 'light'
                            ? totalSalary_month > 0
                              ? 'bg-green-50 hover:bg-green-100 border border-green-200'
                              : 'bg-yellow-50 hover:bg-yellow-100 border border-yellow-200'
                            : totalSalary_month > 0
                              ? 'bg-green-900/20 hover:bg-green-900/30 border border-green-800'
                              : 'bg-yellow-900/20 hover:bg-yellow-900/30 border border-yellow-800'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                mode === 'light'
                                  ? totalSalary_month > 0 ? 'bg-green-200' : 'bg-yellow-200'
                                  : totalSalary_month > 0 ? 'bg-green-800' : 'bg-yellow-800'
                              }`}>
                                <span className={`text-lg font-medium ${
                                  mode === 'light'
                                    ? totalSalary_month > 0 ? 'text-green-700' : 'text-yellow-700'
                                    : totalSalary_month > 0 ? 'text-green-200' : 'text-yellow-200'
                                }`}>{month[0]}</span>
                              </div>
                              <div>
                                <div className={`text-sm font-medium ${
                                  mode === 'light' ? 'text-gray-600' : 'text-gray-400'
                                }`}>{month}</div>
                                <div className={`font-semibold ${
                                  mode === 'light'
                                    ? totalSalary_month > 0 ? 'text-green-700' : 'text-yellow-700'
                                    : totalSalary_month > 0 ? 'text-green-400' : 'text-yellow-400'
                                }`}>
                                  Rs. {totalSalary_month > 0 ? totalSalary_month : 'XXX'}
                                </div>
                              </div>
                            </div>
                            
                            <button
                              onClick={() => {setshowEdit(true); setMonth(month);}}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                totalSalary_month > 0
                                  ? mode === 'light'
                                    ? 'bg-green-200 hover:bg-green-300 text-green-800'
                                    : 'bg-green-700 hover:bg-green-600 text-white'
                                  : mode === 'light'
                                    ? 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800'
                                    : 'bg-yellow-700 hover:bg-yellow-600 text-white'
                              }`}
                            >
                              {totalSalary_month > 0 ? 'Edit' : 'Add'}
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <TeacherPayrollEdit setshowEdit={setshowEdit} teacherRecord={record} month={monthRecord}/>
  )
) : (
  <NoAccess />
);
};

export default TeacherPayrollView;
