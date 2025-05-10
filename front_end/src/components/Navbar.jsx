import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const adminLoggedIn = document.cookie.includes("adminToken");
  const studentLoggedIn = document.cookie.includes("studentToken");
  const navigate = useNavigate();
  const [showDropDown, setshowDropDown] = useState(false);
  const handleLogout = async () => {
    try {
      if (window.confirm("Are you sure you want to log out?")) {
        const response = await axios.post(
          "http://localhost:8000/logout",
          {},
          { withCredentials: true }
        );
        alert(response.data);
        localStorage.clear();
        navigate("/");
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
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./public/school_logo.png"
              className="h-16 scale-125 -mt-3 transform"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {!teacherLoggedIn && !studentLoggedIn && !adminLoggedIn ? (
              <Link to={"/login-form"}>
                <button
                  type="button"
                  className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Login
                </button>
              </Link>
            ) : (
              <button
                type="button"
                className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/about-us"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/notice"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                >
                  NOTICE
                </Link>
              </li>
              {teacherLoggedIn && (
                <li>
                  <Link
                    to="/routine"
                    className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      location.pathname === "/routine"
                        ? "md:dark:text-red-500"
                        : "md:dark:text-white"
                    }`}
                  >
                    ROUTINE
                  </Link>
                </li>
              )}
              {adminLoggedIn && (
                <li>
                  <Link
                    to="/routines"
                    className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      location.pathname === "/routines"
                        ? "md:dark:text-red-500"
                        : "md:dark:text-white"
                    }`}
                  >
                    ROUTINES
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="#"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/contact-us"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                >
                  CONTACT US
                </Link>
              </li>
              {adminLoggedIn && (
                <li>
                  <Link
                    to="/create-notice"
                    className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      location.pathname === "/create-notice"
                        ? "md:dark:text-red-500"
                        : "md:dark:text-white"
                    }`}
                  >
                    NOTICE BOARD
                  </Link>
                </li>
              )}
              {adminLoggedIn && (
                <li
                  onMouseEnter={() => setshowDropDown(true)}
                  onMouseLeave={() => setshowDropDown(false)}
                  className={`cursor-pointer block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/create-account-teacher" || location.pathname==="/create-account-student"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                >
                  CREATE ACCOUNT
                  {showDropDown && (
                    <div
                      id="dropdownDelay"
                      class="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDelayButton"
                      >
                        <li>
                          <Link
                            to="/create-account-teacher"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Create Teacher
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/create-account-student"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Create Student
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Create Admin
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              )}
              {(adminLoggedIn || teacherLoggedIn) && <li>
                <Link
                  to="/fetch-students"
                  className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    location.pathname === "/fetch-students"
                      ? "md:dark:text-red-500"
                      : "md:dark:text-white"
                  }`}
                >
                  DISPLAY STUDENTS
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
