import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FetchStudentData = (props) => {
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
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {props.student.name}'s Detail
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-sm font-medium text-gray-500">Name:</label>
              <p className="font-semibold text-gray-900">
                {props.student.name}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">
                Address:
              </label>
              <p className="font-semibold text-gray-900">
                {props.student.address}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">
                Class:
              </label>
              <p className="font-semibold text-gray-900">
                {props.student.class_name}
              </p>
            </div>
          </div>

          <div className="border-t pt-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Parent Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Fathers Name:
                  </label>
                  <p className="font-semibold text-gray-900">
                    {props.student.father_name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Phone Number:
                  </label>
                  <p className="font-semibold text-gray-900">
                    {props.student.father_phone}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Mother's Name:
                  </label>
                  <p className="font-semibold text-gray-900">
                    {props.student.mother_name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Phone Number:
                  </label>
                  <p className="font-semibold text-gray-900">
                    {props.student.mother_phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="options flex justify-between">
            {adminLoggedIn && (
                <button
                  onClick={handleEditFunc}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit Details
                </button>
            )}
            <button
              onClick={() => {
                props.setshowModal(false), props.setsingleData(null);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchStudentData;
