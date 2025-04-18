import React from "react";
import { Link } from "react-router-dom";

const NoAccess = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-800 text-3xl mb-6 text-center">
        Sorry, you cannot access this page!
      </h1>
      <Link to={"/"}>
      <button className="cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Go back to Home Page
        </span>
      </button>
      </Link>
    </div>
  );
};

export default NoAccess;
