import axios from "axios";
import React, { useEffect, useState } from "react";
import NoAccess from "../NoAccess";
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
  const [id,setID]=useState();
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
      setID(data.teachers)
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

  const handleUpdateChange=async()=>{
    try {
      let data={};
      routines.map((routine)=>{
        data=routine.schedule
      })
      const response=await axios.patch(`http://localhost:8000/updateRoutine/${id}`,{data},{withCredentials:true});
      alert(response.data)
    } catch (error) {
      if(error.response)
      {
        alert(error.response.data)
      }
      else
      {
        alert(error.message);
      }
    }
  }

  return teachers && adminLoggedIn ? (
    <div className="min-h-screen flex flex-col items-center p-6">
      {
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit(fetchRoutine_Teacher)}>
            <select
              name="teachers"
              id="teachers"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 mb-4"
              {...register("teachers", {
                required: "This is required!",
              })}
            >
              <option value="">Select a teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </select>

            {errors.teachers && (
              <p className="text-red-500 mb-2">{errors.teachers.message}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Viewing Routine" : "View Routine"}
              </button>
            </div>
          </form>
        </div>
      }

      {routines.length ? (
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
                        <form>
                          <input
                            type="text"
                            className="text-purple-700 font-bold"
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
                          <br />
                          <input
                            type="text"
                            placeholder="Class Name"
                            className="text-purple-700 font-bold"
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
          <div className="flex justify-end">
              <button
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleUpdateChange}
              >
                Update Routine
              </button>
            </div>        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <NoAccess />
  );
};

export default RoutineEdit;
