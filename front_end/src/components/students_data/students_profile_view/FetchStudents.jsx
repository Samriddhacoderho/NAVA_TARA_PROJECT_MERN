import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FetchStudentData from "./FetchStudentData";
import NoAccess from "../../NoAccess";

const FetchStudents = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const [classs, setClasss] = useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const [singleData,setsingleData]=useState(null);

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

  return (
    (adminLoggedIn || teacherLoggedIn)?(
      !showModal?<div className="min-h-screen flex flex-col items-center p-6">
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
        {classs ? (
          studentsData.length ? (
            <div className="mt-5 text-white p-6 rounded-lg shadow-lg w-200 border-2 border-solid border-red-500">
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
                {studentsData.map((student) => (
                  <li key={student._id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={"/379383_student_icon.png"}
                        />
                      </div>
                      <div className="flex-1 min-w-0 ml-3">
                        <p className="text-2xl font-medium text-gray-900 truncate dark:text-black">
                          {student.name}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <div className="viewdetailsButton">
                          <button
                            onClick={() => viewHandleFunc(student)}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-green-500 dark:focus:ring-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
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
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="h-screen flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-3xl mb-6 text-center">
                No Students Data Available
              </h1>
            </div>
          )
        ) : (
          ""
        )}
      </div>:<FetchStudentData setsingleData={setsingleData} setshowModal={setshowModal} student={singleData}/>
    ):<NoAccess/>
  );
};

export default FetchStudents;
