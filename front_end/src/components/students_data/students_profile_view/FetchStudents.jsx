import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FetchStudentData from "./FetchStudentData";
import NoAccess from "../../NoAccess";
import { contextCreate } from "../../../Context";

const FetchStudents = () => {
  const {mode,setMode,userType} = useContext(contextCreate);
  const [classs, setClasss] = useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);

  const [singleData, setsingleData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const fetchStudents_Class = async (data) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/getStudents/${data.class_name}`,
        { withCredentials: true }
      );
      setStudentsData(response.data);
      setClasss(true);
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  const viewHandleFunc = async (student) => {
    try {
      if (window.confirm("Are you sure you want to open the student's data?")) {
        setshowModal(true);
        setsingleData(student);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const viewDeleteFunc = async (student) => {
    try {
      if(window.confirm("Are you sure you want to delete this student?")) {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/deleteStudent/${student._id}`,
          { withCredentials: true }
        );
        alert(response.data);
        window.location.reload();
      }
    } catch (error) {
      alert(error.response ? error.response.data : error.message);
    }
  }

  return userType==="admin" || "teacher" ? (
    !showModal ? (
      <div className={`min-h-screen ${
        mode === 'light' 
          ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' 
          : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
      } flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8`}>
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            mode === 'light'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600'
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
          } bg-clip-text text-transparent mb-3 sm:mb-4`}>
            Student Directory
          </h1>
          <p className={`text-base sm:text-lg md:text-xl ${
            mode === 'light' ? 'text-gray-600' : 'text-gray-300'
          } mx-auto`}>
            Access and manage student information across all classes
          </p>
        </div>

        {/* Class Selection Card */}
        <div className={`w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto ${
          mode === 'light'
            ? 'bg-white/90'
            : 'bg-gray-800/90'
        } p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl backdrop-blur-xl backdrop-filter border ${
          mode === 'light'
            ? 'border-white/20'
            : 'border-gray-700/30'
        } transform transition-all duration-300 hover:scale-[1.02]`}>
          <div className="mb-6 sm:mb-8">
            <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full ${
              mode === 'light'
                ? 'bg-blue-100'
                : 'bg-blue-900/50'
            }`}>
              <svg className={`w-6 h-6 sm:w-8 sm:h-8 ${
                mode === 'light'
                  ? 'text-blue-600'
                  : 'text-blue-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              mode === 'light'
                ? 'text-gray-800'
                : 'text-white'
            } text-center`}>
              Select Class
            </h2>
          </div>

          {/* Form - Enhanced for touch devices */}
          <form
            onSubmit={handleSubmit(fetchStudents_Class)}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative group">
              {/* Select dropdown - Fixed light mode text */}
              <select
                name="class_name"
                id="class_name"
                className={`w-full p-3 sm:p-4 md:p-5 text-base sm:text-lg ${
                  mode === 'light'
                    ? 'bg-gray-50 text-gray-900 border-gray-300'
                    : 'bg-gray-700/50 text-gray-200 border-gray-600'
                } rounded-xl sm:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer backdrop-blur-sm group-hover:border-blue-400`}
                {...register("class_name", {
                  required: "This is required!",
                })}
              >
                <option value="" className={mode === 'light' ? 'text-gray-900' : 'text-gray-200'}>
                  Choose a class year
                </option>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <option key={num} value={num} className={mode === 'light' ? 'text-gray-900' : 'text-gray-200'}>
                    Class {num}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Error message - Better visibility on mobile */}
            {errors.class_name && (
              <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.class_name.message}
              </p>
            )}

            {/* Submit Button - Better touch target */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white text-base sm:text-lg font-medium py-3 sm:py-4 md:py-5 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Display Students</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Students List Section */}
        {classs && (
          <div className="w-full max-w-xs sm:max-w-2xl lg:max-w-5xl mt-8 sm:mt-12 px-4">
            {studentsData.length ? (
              <div className={`${
                mode === 'light'
                  ? 'bg-white shadow-lg border border-gray-200'
                  : 'bg-gray-800/90 border-gray-700/30'
              } rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl backdrop-filter`}>
                {/* Header */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 ${
                  mode === 'light' ? 'border-b border-gray-200' : 'border-b border-gray-700'
                }`}>
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                    mode === 'light' ? 'text-gray-900' : 'text-white'
                  } flex items-center mb-2 sm:mb-0`}>
                    Class Students
                  </h3>
                  <span className={`text-sm sm:text-base ${
                    mode === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    Total: {studentsData.length}
                  </span>
                </div>

                {/* Student Cards */}
                <ul className="grid grid-cols-1 gap-4 sm:gap-6">
                  {studentsData.map((student) => (
                    <li
                      key={student._id}
                      className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                        mode === 'light'
                          ? 'hover:bg-gray-50 border border-gray-200 hover:border-blue-500'
                          : 'hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Student Avatar */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img
                              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ${
                                mode === 'light'
                                  ? 'border-2 border-gray-200 group-hover:border-blue-500'
                                  : 'border-2 border-gray-600 group-hover:border-blue-500'
                              } transition-colors duration-300`}
                              src="/379383_student_icon.png"
                              alt="Student avatar"
                            />
                            <div className={`absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                              mode === 'light' ? 'border-2 border-white' : 'border-2 border-gray-800'
                            }`}></div>
                          </div>
                        </div>

                        {/* Student Info */}
                        <div className="flex-1 min-w-0 text-center sm:text-left">
                          <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold truncate ${
                            mode === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                            {student.name}
                          </h4>
                        </div>

                        {/* View Profile Button */}
                        <button
                          onClick={() => viewHandleFunc(student)}
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 ${
                            mode === 'light'
                              ? 'bg-blue-600 hover:bg-blue-700'
                              : 'bg-blue-500 hover:bg-blue-600'
                          } text-white text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 group-hover:scale-105 w-full sm:w-auto justify-center`}
                        >
                          <span>View Profile</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1"
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
                        </button>
                        {userType==="admin" && <button
                          onClick={() => viewDeleteFunc(student)}
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 ${
                            mode === 'light'
                              ? 'bg-red-600 hover:bg-red-700'
                              : 'bg-red-500 hover:bg-red-600'
                          } text-white text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 group-hover:scale-105 w-full sm:w-auto justify-center`}
                        >
                          <span>Delete Student</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1"
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
                        </button>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // No Students Found state - Fixed light mode
              <div className={`text-center ${
                mode === 'light'
                  ? 'bg-white border border-gray-200'
                  : 'bg-gray-800/90 border-gray-700/30'
              } rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-8 sm:p-12 backdrop-blur-xl backdrop-filter`}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-6">
                  <svg
                    className="w-10 h-10 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4M8 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  No Students Found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
                  There are no students registered in this class yet. Please
                  check back later.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    ) : (
      <FetchStudentData
        setsingleData={setsingleData}
        setshowModal={setshowModal}
        student={singleData}
      />
    )
  ) : (
    <NoAccess />
  );
};

export default FetchStudents;
