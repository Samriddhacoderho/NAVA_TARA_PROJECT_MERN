import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoAccess from "../NoAccess";
import TeacherPayrollEdit from "./TeacherPayrollEdit";
import { contextCreate } from "../../Context";

const TeacherPayrollView = () => {
  const [teachers, setTeachers] = useState([]);
  const [btnClick, setbtnClick] = useState(false);
  const [record, setRecord] = useState([]);
  const [teacherName, setTeacherName] = useState(null);
  const [showEdit, setshowEdit] = useState(false);
  const [monthRecord, setMonth] = useState(null);
  const { mode, setMode, userType } = useContext(contextCreate);
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
        if (userType === "admin") {
          const teachersData = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/getTeachers`,
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
    let response = null;
    try {
      setbtnClick(true);
      response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/getSalary/${id}`,
        { withCredentials: true }
      );
      setRecord(response.data);
      setTeacherName(name);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      if (
        window.confirm(
          "Are you sure you want to delete this teacher? This action cannot be undone."
        )
      ) {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/deleteTeacher/${id}`,
          { withCredentials: true }
        );
        alert(response.data);
        setbtnClick(false);
        setRecord([]);
        setTeacherName(null);
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  return userType === "admin" ? (
    !showEdit ? (
      <div
        className={`min-h-screen flex items-start justify-start py-10 pl-16 ${
          mode === "light"
            ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
            : "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
        }`}
      >
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Teachers List Section */}
            <div
              className={`${
                mode === "light"
                  ? "bg-white/80 backdrop-blur-xl shadow-xl border border-blue-100"
                  : "bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700"
              } rounded-2xl overflow-hidden`}
            >
              <div
                className={`p-6 ${
                  mode === "light"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "bg-gradient-to-r from-blue-600 to-indigo-700"
                }`}
              >
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Select Teacher
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-5">
                  {teachers &&
                    teachers.map((teacher) => (
                      <div>
                      <div
                        key={teacher._id}
                        className={`group relative w-full px-6 py-4 rounded-xl flex items-center justify-between transition-all transform hover:scale-[1.03] focus:scale-[1.03] outline-none ring-0 focus:ring-4 ${
                          mode === "light"
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 focus:ring-blue-300"
                            : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-700 focus:ring-indigo-900"
                        } text-white shadow-lg hover:shadow-2xl focus:shadow-2xl`}
                        tabIndex={0}
                        aria-label={`Show payroll for ${teacher.name}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <span className="font-medium text-lg">
                            {teacher.name}
                          </span>
                        </div>
                              
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => deleteHandler(teacher._id)}
                            className="ml-2 px-3 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors text-sm"
                            aria-label={`Delete ${teacher.name}`}
                          >
                            Delete
                          </button>  
                          <svg
                            onClick={() =>
                              handleViewPayments(teacher._id, teacher.name)
                            }
                            className="w-6 h-6 text-white/80 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                         
                        </div>
                        <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 group-focus:ring-white/60 transition-all pointer-events-none"></div>               
                      </div>
                          </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Payment Records Section */}
            {btnClick && (
              <div
                className={`${
                  mode === "light"
                    ? "bg-white/80 backdrop-blur-xl shadow-xl border border-pink-100"
                    : "bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-pink-900"
                } rounded-2xl overflow-hidden`}
              >
                <div
                  className={`p-6 ${
                    mode === "light"
                      ? "bg-gradient-to-r from-pink-500 to-rose-600"
                      : "bg-gradient-to-r from-pink-600 to-rose-700"
                  }`}
                >
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Payment Records - {teacherName}
                  </h2>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {record &&
                      months.map((month) =>
                        record.map((rec) => {
                          const totalSalary_month =
                            rec.records[month].salary +
                            rec.records[month].allowance;
                          return (
                            <div
                              key={month}
                              className={`group p-4 rounded-xl transition-all ${
                                mode === "light"
                                  ? totalSalary_month > 0
                                    ? "bg-green-50 hover:bg-green-100 border border-green-200"
                                    : "bg-yellow-50 hover:bg-yellow-100 border border-yellow-200"
                                  : totalSalary_month > 0
                                  ? "bg-green-900/20 hover:bg-green-900/30 border border-green-800"
                                  : "bg-yellow-900/20 hover:bg-yellow-900/30 border border-yellow-800"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                      mode === "light"
                                        ? totalSalary_month > 0
                                          ? "bg-green-200"
                                          : "bg-yellow-200"
                                        : totalSalary_month > 0
                                        ? "bg-green-800"
                                        : "bg-yellow-800"
                                    }`}
                                  >
                                    <span
                                      className={`text-lg font-medium ${
                                        mode === "light"
                                          ? totalSalary_month > 0
                                            ? "text-green-700"
                                            : "text-yellow-700"
                                          : totalSalary_month > 0
                                          ? "text-green-200"
                                          : "text-yellow-200"
                                      }`}
                                    >
                                      {month[0]}
                                    </span>
                                  </div>
                                  <div>
                                    <div
                                      className={`text-sm font-medium ${
                                        mode === "light"
                                          ? "text-gray-600"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      {month}
                                    </div>
                                    <div
                                      className={`font-semibold ${
                                        mode === "light"
                                          ? totalSalary_month > 0
                                            ? "text-green-700"
                                            : "text-yellow-700"
                                          : totalSalary_month > 0
                                          ? "text-green-400"
                                          : "text-yellow-400"
                                      }`}
                                    >
                                      Rs.{" "}
                                      {totalSalary_month > 0
                                        ? totalSalary_month
                                        : "XXX"}
                                    </div>
                                  </div>
                                </div>

                                <button
                                  onClick={() => {
                                    setshowEdit(true);
                                    setMonth(month);
                                  }}
                                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    totalSalary_month > 0
                                      ? mode === "light"
                                        ? "bg-green-200 hover:bg-green-300 text-green-800"
                                        : "bg-green-700 hover:bg-green-600 text-white"
                                      : mode === "light"
                                      ? "bg-yellow-200 hover:bg-yellow-300 text-yellow-800"
                                      : "bg-yellow-700 hover:bg-yellow-600 text-white"
                                  }`}
                                >
                                  {totalSalary_month > 0 ? "Edit" : "Add"}
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
      <TeacherPayrollEdit
        setshowEdit={setshowEdit}
        teacherRecord={record}
        month={monthRecord}
      />
    )
  ) : (
    <NoAccess />
  );
};

export default TeacherPayrollView;
