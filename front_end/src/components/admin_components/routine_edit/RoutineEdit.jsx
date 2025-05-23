import axios from "axios";
import React, { useEffect, useState } from "react";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";

const RoutineEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
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
  const [routines, setRoutine] = useState([]);
  const [id, setID] = useState();
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

  const fetchRoutine_Teacher = async (data) => {
    try {
      if (routines) {
        setRoutine([]);
      }
      const result = await axios.get(
        `http://localhost:8000/fetch/routines/${data.teachers}`,
        { withCredentials: true }
      );
      setRoutine(result.data);
      setID(data.teachers);
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  const handleRoutineChange = (name, period, field, value) => {
    setRoutine((prevRoutines) =>
      prevRoutines.map((routine) => ({
        ...routine,
        schedule: {
          ...routine.schedule,
          [name]: {
            ...routine.schedule[name],
            [period]: {
              ...routine.schedule[name][period],
              [field]: value,
            },
          },
        },
      }))
    );
  };

  const handleUpdateChange = async () => {
    try {
      if (window.confirm("Are you sure you want to update this routine?")) {
        let data = {};
        routines.map((routine) => {
          data = routine.schedule;
        });
        const response = await axios.patch(
          `http://localhost:8000/updateRoutine/${id}`,
          { data },
          { withCredentials: true }
        );
        alert(response.data);
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

  return teachers && adminLoggedIn ? (
    <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
      {/* Teacher Selection Card */}
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-white/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
            <svg
              className="w-6 h-6 text-white"
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
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Edit Teacher's Routine
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(fetchRoutine_Teacher)}
          className="space-y-4"
        >
          <div className="relative">
            <select
              name="teachers"
              id="teachers"
              className="w-full p-3 pl-4 pr-10 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-gray-700 bg-white/50 backdrop-blur-sm appearance-none hover:border-teal-300"
              {...register("teachers", { required: "This is required!" })}
            >
              <option value="">Select a teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-teal-500"
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

          {errors.teachers && (
            <p className="text-red-500 text-sm ml-1">
              {errors.teachers.message}
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex items-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 focus:ring-4 focus:ring-teal-300/50 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-teal-500/25 group"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Viewing Routine
                </>
              ) : (
                <>
                  View Routine
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Routine Table */}
      {routines.length ? (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 overflow-x-auto border border-white/50">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="w-1/6 p-4 bg-transparent"></th>
                {periods.map((period) => (
                  <th
                    key={period}
                    className="bg-teal-50/50 text-teal-900 font-bold p-4 border-b-2 border-teal-100 text-center first-letter:text-lg"
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
                  <tr key={name} className="group hover:bg-teal-50/30 transition-colors duration-200">
                    <td className={`${color} text-white font-bold p-4 text-center rounded-xl m-1 shadow-lg transition-transform duration-200 group-hover:scale-[1.02]`}>
                      {name}
                    </td>
                    {periods.map((period) => (
                      <td key={period} className="border border-teal-100/30 p-4">
                        <form className="space-y-2">
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-gray-700 font-medium text-center bg-white/50 placeholder-teal-300"
                            placeholder="Subject Name"
                            defaultValue={
                              routine.schedule[name][period].subject
                            }
                            onChange={(e) =>
                              handleRoutineChange(
                                name,
                                period,
                                "subject",
                                e.target.value
                              )
                            }
                          />
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-gray-700 font-medium text-center bg-white/50 placeholder-teal-300"
                            placeholder="Class Name"
                            defaultValue={
                              routine.schedule[name][period].class_ko_name
                            }
                            onChange={(e) =>
                              handleRoutineChange(
                                name,
                                period,
                                "class_ko_name",
                                e.target.value
                              )
                            }
                          />
                        </form>
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleUpdateChange}
              className="relative inline-flex items-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 focus:ring-4 focus:ring-teal-300/50 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-teal-500/25"
            >
              Update Routine
            </button>
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <NoAccess />
  );
};

export default RoutineEdit;
