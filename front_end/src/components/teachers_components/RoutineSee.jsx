import React, { useEffect, useState } from "react";
import NoAccess from "../NoAccess";
import axios from "axios";

const RoutineSee = () => {
  const teacherLoggedIn = document.cookie.includes("teacherToken");
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
          const teacherIDGet = await axios.get(
            "http://localhost:8000/getid/fromtoken",
            { withCredentials: true }
          );
          const response = await axios.get(
            `http://localhost:8000/fetch/routines/${teacherIDGet.data}`,
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
    <div className="overflow-x-auto p-4">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/6"></th>
            {periods.map((period) => (
              <th
                key={period}
                className="bg-blue-100 text-blue-900 font-bold py-2 px-4 text-center"
              >
                {period.charAt(0).toUpperCase() +
                  period.slice(1, 6) +
                  " " +
                  period.slice(6)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routines.map((routine) =>
            days.map(({ name, color }) => (
              <tr key={name}>
                <td
                  className={`${color} text-white font-bold py-6 text-center`}
                >
                  {name}
                </td>
                {periods.map((period) => (
                  <td key={period} className="border p-4 text-center">
                    <span className="text-purple-700 font-bold">
                      {routine.schedule[name][period].subject}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm">
                      {routine.schedule[name][period].class_ko_name}
                    </span>
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <NoAccess />
  );
};

export default RoutineSee;
