import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextCreate } from "../Context";

const Home = () => {
  const teacherLoggedIn=document.cookie.includes("teacherToken")
  const adminLoggedIn=document.cookie.includes("adminToken")
  const studentLoggedIn=document.cookie.includes("studentToken")
  const contextUse=useContext(contextCreate)
  return (
    <div className="h-screen flex flex-col justify-center items-center from-blue-50 to-purple-50 px-4">
      <h1 className="text-indigo-900 text-4xl md:text-5xl font-bold mb-8 text-center leading-tight">
        Welcome to Navatara English School
      </h1>
      <Link to={"/login-form"} className="mt-4">
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Get Started
          </span>
        </button>
      </Link>
      {(teacherLoggedIn || adminLoggedIn || studentLoggedIn) && (
        <div className="mt-8 px-6 py-3 bg-white rounded-full shadow-md text-purple-800 font-medium">
          Hi {contextUse.name}
        </div>
      )}
    </div>
  );
};

export default Home;