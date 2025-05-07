import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FetchStudents = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const [classs,setClasss]=useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const fetchStudents_Class = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getStudents/${data.class_name}`,
        { withCredentials: true }
      );
      setStudentsData(response.data);
      setClasss(true)
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };
  return (
    (adminLoggedIn || teacherLoggedIn) && (
      <div className="min-h-screen flex flex-col items-center p-6">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit(fetchStudents_Class)}>
            <select
              name="class_name"
              id="class_name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 mb-4"
              {...register("class_name", {
                required: "This is required!",
              })}
            >
              <option value="">Select a class:</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
            </select>

            {errors.class_name && (
              <p className="text-red-500 mb-2">{errors.class_name.message}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Displaying Students" : "Display Students"}
              </button>
            </div>
          </form>
        </div>
        {classs?studentsData.length?(
          <div className="mt-2 space-y-2 w-full">
            {studentsData.map((student) => (
              <div key={student._id} className="border border-black w-full flex justify-between items-center px-4 py-3">
                <span className="font-semibold text-black">{student.name}</span>
                <button className="text-blue-600 font-medium hover:underline">
                  View
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-gray-500 text-3xl mb-6 text-center">
              No Students Data Available
            </h1>
          </div>
        ):""}
      </div>
    )
  );
};

export default FetchStudents;

