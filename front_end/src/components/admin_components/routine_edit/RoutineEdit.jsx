import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";
import { contextCreate } from "../../../Context";

const RoutineEdit = () => {
  const { mode, setMode } = useContext(contextCreate);
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
            `${import.meta.env.VITE_BACKEND_URL}/getTeachers`,
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
        `${import.meta.env.VITE_BACKEND_URL}/fetch/routines/${data.teachers}`,
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
          `${import.meta.env.VITE_BACKEND_URL}/updateRoutine/${id}`,
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
    <div
      className={`min-h-screen p-4 sm:p-6 lg:p-8 ${
        mode === "light" ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-4 ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Teacher's Routine Management
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Teacher Selection Card */}
        <div
          className={`relative overflow-hidden rounded-2xl shadow-xl p-6 sm:p-8 border ${
            mode === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800 border-gray-700"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
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
              <h2
                className={`text-2xl font-bold ${
                  mode === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                Select Teacher
              </h2>
            </div>

            {/* Stats or Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div
                className={`p-4 rounded-xl ${
                  mode === "light" ? "bg-teal-50" : "bg-teal-900/20"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    mode === "light" ? "text-teal-700" : "text-teal-300"
                  }`}
                >
                  {teachers.length}
                </div>
                <div
                  className={`text-sm ${
                    mode === "light" ? "text-teal-600" : "text-teal-400"
                  }`}
                >
                  Total Teachers
                </div>
              </div>
              <div
                className={`p-4 rounded-xl ${
                  mode === "light" ? "bg-purple-50" : "bg-purple-900/20"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    mode === "light" ? "text-purple-700" : "text-purple-300"
                  }`}
                >
                  7
                </div>
                <div
                  className={`text-sm ${
                    mode === "light" ? "text-purple-600" : "text-purple-400"
                  }`}
                >
                  Periods/Day
                </div>
              </div>
            </div>

            {/* Existing Form */}
            <form
              onSubmit={handleSubmit(fetchRoutine_Teacher)}
              className="space-y-4"
            >
              <div className="relative">
                <select
                  name="teachers"
                  id="teachers"
                  className={`w-full p-3 pl-4 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                    mode === "light"
                      ? "bg-white border-gray-200 text-gray-700"
                      : "bg-gray-700 border-gray-600 text-gray-200"
                  }`}
                  {...register("teachers", { required: "This is required!" })}
                >
                  <option value="">Select a teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher._id} value={teacher._id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>

              {errors.teachers && (
                <p className="text-red-500 text-sm ml-1">
                  {errors.teachers.message}
                </p>
              )}

              {!routines.length ? (
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
              ) : (
                <div className="flex justify-end">
                  <button
                    onClick={() =>{alert("Routine Closed Successfully!"); window.location.reload();}}
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
                        Closing Routine
                      </>
                    ) : (
                      <>
                        Close Routine
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Information Panel */}
        <div
          className={`rounded-2xl p-8 relative overflow-hidden ${
            mode === "light"
              ? "bg-gradient-to-br from-teal-500 to-emerald-500"
              : "bg-gradient-to-br from-teal-600 to-emerald-600"
          }`}
        >
          <div className="absolute inset-0 bg-grid-white/10"></div>

          {/* Stats Section */}
          <div className="relative grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-white/80 text-sm mb-1">Working Days</div>
              <div className="text-white text-3xl font-bold">6</div>
              <div className="text-white/60 text-xs mt-1">Sunday - Friday</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-white/80 text-sm mb-1">Daily Hours</div>
              <div className="text-white text-3xl font-bold">7</div>
              <div className="text-white/60 text-xs mt-1">40+ Hours Weekly</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Easy Management</h4>
                  <p className="text-white/70 text-sm">
                    Update schedules with simple clicks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Real-time Updates</h4>
                  <p className="text-white/70 text-sm">
                    Changes reflect immediately
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Workload Overview</h4>
                  <p className="text-white/70 text-sm">
                    Monitor teaching hours efficiently
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Routine Table */}
      {routines.length ? (
        <div
          className={`rounded-2xl shadow-xl p-4 sm:p-6 overflow-x-auto border ${
            mode === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800 border-gray-700"
          }`}
        >
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="w-1/6 p-4 bg-transparent"></th>
                {periods.map((period) => (
                  <th
                    key={period}
                    className={`font-bold p-4 border-b-2 text-center first-letter:text-lg ${
                      mode === "light"
                        ? "bg-teal-50 text-teal-900 border-teal-100"
                        : "bg-teal-900/20 text-teal-100 border-teal-800"
                    }`}
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
                  <tr
                    key={name}
                    className={`group transition-colors duration-200 ${
                      mode === "light"
                        ? "hover:bg-teal-50/30"
                        : "hover:bg-teal-900/20"
                    }`}
                  >
                    <td
                      className={`${color} text-white font-bold p-4 text-center rounded-xl m-1 shadow-lg transition-transform duration-200 group-hover:scale-[1.02]`}
                    >
                      {name}
                    </td>
                    {periods.map((period) => (
                      <td
                        key={period}
                        className={`border p-4 ${
                          mode === "light"
                            ? "border-teal-100/30"
                            : "border-teal-800/30"
                        }`}
                      >
                        <form className="space-y-2">
                          <input
                            type="text"
                            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 font-medium text-center ${
                              mode === "light"
                                ? "bg-white border-teal-200 text-gray-700 placeholder-teal-300"
                                : "bg-gray-700 border-teal-800 text-gray-200 placeholder-teal-700"
                            }`}
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
                            className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 font-medium text-center ${
                              mode === "light"
                                ? "bg-white border-teal-200 text-gray-700 placeholder-teal-300"
                                : "bg-gray-700 border-teal-800 text-gray-200 placeholder-teal-700"
                            }`}
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
              className={`relative inline-flex items-center px-6 py-3 rounded-xl text-white transition-all duration-300 font-medium text-sm shadow-lg ${
                mode === "light"
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 hover:shadow-teal-500/25"
                  : "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 hover:shadow-teal-600/25"
              }`}
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
