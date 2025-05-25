import React, { useContext, useEffect, useState } from "react";
import NoAccess from "../../NoAccess";
import axios from "axios";
import { contextCreate } from "../../../Context";

const RoutineSee = () => {
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const {mode}=useContext(contextCreate)
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
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        if (teacherLoggedIn) {
          const response = await axios.get(
            `http://localhost:8000/fetch/routines`,
            { withCredentials: true }
          );
          setRoutines(response.data);
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    };

    fetchRoutines();
  }, []);

  return teacherLoggedIn ? (
    <div
      className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        mode === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1
          className={`text-4xl font-extrabold ${
            mode === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Weekly Class Schedule
        </h1>
        <p
          className={`mt-2 text-lg ${
            mode === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          View your teaching schedule for the week.
        </p>
      </div>

      {/* Table Container */}
      <div
        className={`overflow-x-auto rounded-lg shadow-lg ${
          mode === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr
              className={`${
                mode === "light" ? "bg-gray-100" : "bg-gray-700"
              } text-sm sm:text-base`}
            >
              <th className="w-1/6 py-4 px-2 sm:px-4"></th>
              {periods.map((period) => (
                <th
                  key={period}
                  className={`py-4 px-2 sm:px-4 text-center font-semibold ${
                    mode === "light"
                      ? "text-blue-900 bg-blue-100"
                      : "text-blue-300 bg-blue-900/20"
                  }`}
                >
                  <div className="text-sm sm:text-base">
                    {period.charAt(0).toUpperCase() +
                      period.slice(1, 6) +
                      " " +
                      period.slice(6)}
                  </div>
                 
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {routines.map((routine) =>
              days.map(({ name, color }) => (
                <tr
                  key={name}
                  className={`group transition-colors duration-300 hover:${
                    mode === "light" ? "bg-gray-50" : "bg-gray-700/30"
                  }`}
                >
                  <td
                    className={`${color} text-white font-bold py-6 px-2 sm:px-4 text-center`}
                  >
                    <div className="text-sm sm:text-base">{name}</div>
                  </td>
                  {periods.map((period) => (
                    <td
                      key={period}
                      className={`relative p-3 sm:p-4 text-center border ${
                        mode === "light"
                          ? "border-gray-200 hover:bg-blue-50"
                          : "border-gray-700 hover:bg-blue-900/10"
                      }`}
                    >
                      <div
                        className={`rounded-lg p-2 transition-all duration-300 transform hover:scale-105 ${
                          mode === "light"
                            ? "hover:shadow-md hover:bg-white"
                            : "hover:shadow-lg hover:shadow-blue-900/20 hover:bg-gray-800"
                        }`}
                      >
                        <span
                          className={`block font-semibold mb-1 ${
                            mode === "light"
                              ? "text-purple-700"
                              : "text-purple-300"
                          }`}
                        >
                          {routine.schedule[name][period].subject}
                        </span>
                        <span
                          className={`block text-xs ${
                            mode === "light"
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          {routine.schedule[name][period].class_ko_name}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Legend Section */}
      <div
        className={`mt-6 p-4 rounded-lg ${
          mode === "light"
            ? "bg-blue-50 text-blue-800"
            : "bg-blue-900/20 text-blue-100"
        }`}
      >
        <h3 className="font-semibold mb-2">Schedule Information</h3>
        <ul className="text-sm space-y-1">
          <li>• Hover over cells to see more details.</li>
          <li>• Each period is 60 minutes long.</li>
          <li>• Schedule updates automatically when changes are made.</li>
        </ul>
      </div>
    </div>
  ) : (
    <NoAccess />
  );
};

export default RoutineSee;
