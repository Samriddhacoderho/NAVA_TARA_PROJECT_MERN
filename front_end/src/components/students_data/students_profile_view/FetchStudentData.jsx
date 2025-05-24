import React, { useContext } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { contextCreate } from "../../../Context";

const FetchStudentData = (props) => {
  const {mode,setMode}=useContext(contextCreate)
  const adminLoggedIn = document.cookie.includes("adminToken");
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const navigate=useNavigate();
  const handleEditFunc = async () => {
    try {
      navigate("/edit-details",{state:{student:props.student}});
    } catch (error) {
      alert(error.message);
    }
  };
  const handleViewFeeFunc=async()=>{
    try {
      navigate("/view-fee",{state:{student:props.student}});
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className={`min-h-screen ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 to-indigo-100'
        : 'bg-gradient-to-br from-gray-900 to-gray-800'
    } p-4 sm:p-6 lg:p-8 flex items-center justify-center`}>
      <div className={`w-full max-w-4xl ${
        mode === 'light'
          ? 'bg-white shadow-lg'
          : 'bg-gray-800 shadow-xl'
      } rounded-2xl overflow-hidden`}>
      
      {/* Header with gradient - Always visible */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
        <div className="relative p-8 sm:p-10">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="h-12 w-12 sm:h-14 sm:w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {props.student.name}'s Profile
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            {/* Name Field */}
            <div className={`${
              mode === 'light'
                ? 'bg-gray-50 border border-gray-100'
                : 'bg-gray-700/50'
            } rounded-xl p-4`}>
              <label className={`text-sm font-medium ${
                mode === 'light'
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}>Name</label>
              <p className={`text-lg font-semibold ${
                mode === 'light'
                  ? 'text-gray-800'
                  : 'text-white'
              } mt-1`}>
                {props.student.name}
              </p>
            </div>

            {/* Class Field */}
            <div className={`${
              mode === 'light'
                ? 'bg-gray-50 border border-gray-100'
                : 'bg-gray-700/50'
            } rounded-xl p-4`}>
              <label className={`text-sm font-medium ${
                mode === 'light'
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}>Class</label>
              <p className={`text-lg font-semibold ${
                mode === 'light'
                  ? 'text-gray-800'
                  : 'text-white'
              } mt-1`}>
                Class {props.student.class_name}
              </p>
            </div>
          </div>

          {/* Address Field */}
          <div className={`${
            mode === 'light'
              ? 'bg-gray-50 border border-gray-100'
              : 'bg-gray-700/50'
          } rounded-xl p-4 h-full`}>
            <label className={`text-sm font-medium ${
              mode === 'light'
                ? 'text-gray-600'
                : 'text-gray-400'
            }`}>Address</label>
            <p className={`text-lg font-semibold ${
              mode === 'light'
                ? 'text-gray-800'
                : 'text-white'
            } mt-1`}>
              {props.student.address}
            </p>
          </div>
        </div>

        {/* Parent Information */}
        <div className={`${
          mode === 'light'
            ? 'bg-gray-50 border border-gray-100'
            : 'bg-gray-700/50'
        } rounded-2xl p-6 mb-8`}>
          <h2 className={`text-xl font-bold ${
            mode === 'light'
              ? 'text-gray-800'
              : 'text-white'
          } mb-6 flex items-center`}>
            <svg className={`h-6 w-6 mr-2 ${
              mode === 'light' ? 'text-blue-600' : 'text-blue-400'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Parent Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Father's Information */}
            <div className="space-y-4">
              <div>
                <label className={`text-sm font-medium ${
                  mode === 'light'
                    ? 'text-gray-600'
                    : 'text-gray-400'
                }`}>Father's Name</label>
                <p className={`text-lg font-semibold ${
                  mode === 'light'
                    ? 'text-gray-800'
                    : 'text-white'
                } mt-1`}>
                  {props.student.father_name}
                </p>
              </div>
              <div>
                <label className={`text-sm font-medium ${
                  mode === 'light'
                    ? 'text-gray-600'
                    : 'text-gray-400'
                }`}>Phone Number</label>
                <p className={`text-lg font-semibold ${
                  mode === 'light'
                    ? 'text-gray-800'
                    : 'text-white'
                } mt-1 flex items-center`}>
                  <svg className={`h-5 w-5 mr-2 ${
                    mode === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {props.student.father_phone}
                </p>
              </div>
            </div>

            {/* Mother's Information */}
            <div className="space-y-4">
              <div>
                <label className={`text-sm font-medium ${
                  mode === 'light'
                    ? 'text-gray-600'
                    : 'text-gray-400'
                }`}>Mother's Name</label>
                <p className={`text-lg font-semibold ${
                  mode === 'light'
                    ? 'text-gray-800'
                    : 'text-white'
                } mt-1`}>
                  {props.student.mother_name}
                </p>
              </div>
              <div>
                <label className={`text-sm font-medium ${
                  mode === 'light'
                    ? 'text-gray-600'
                    : 'text-gray-400'
                }`}>Phone Number</label>
                <p className={`text-lg font-semibold ${
                  mode === 'light'
                    ? 'text-gray-800'
                    : 'text-white'
                } mt-1 flex items-center`}>
                  <svg className={`h-5 w-5 mr-2 ${
                    mode === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {props.student.mother_phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              props.setshowModal(false);
              props.setsingleData(null);
            }}
            className={`w-full sm:w-auto ${
              mode === 'light'
                ? 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
            } font-medium px-6 py-3 rounded-xl border transition-all duration-200 flex items-center justify-center space-x-2`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back</span>
          </button>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {adminLoggedIn && (
              <>
                <button
                  onClick={handleEditFunc}
                  className={`w-full sm:w-auto ${
                    mode === 'light'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit Details</span>
                </button>
                
                <button
                  onClick={handleViewFeeFunc}
                  className={`w-full sm:w-auto ${
                    mode === 'light'
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-indigo-500 hover:bg-indigo-600'
                  } text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>View Fee Record</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FetchStudentData;
