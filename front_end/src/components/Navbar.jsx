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
      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b-2 border-gray-800 shadow-xl backdrop-blur-sm bg-opacity-95">
        {/* Top border accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="flex items-center justify-between mx-auto px-6 py-3">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <div className="overflow-hidden rounded-full p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-gray-900 rounded-full p-0.5">
                <img
                  src="/school_logo.png"
                  className="h-20 filter drop-shadow-lg transition-all duration-500 group-hover:brightness-110"
                  alt="School Logo"
                />
              </div>
            </div>
            <img
              src="/school_logo.png"
              className="h-20 filter drop-shadow-lg transition-all duration-500 group-hover:opacity-0 absolute"
              alt="School Logo"
            />
          </Link>
          
          <div
            className="hidden md:flex md:items-center md:space-x-1"
            id="navbar-sticky"
          >
            <ul className="flex items-center space-x-2">
              <li>
                <Link
                  to="/"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/"
                      ? "text-white font-medium border-b-2 border-pink-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-pink-300"
                  } transition-all duration-300`}
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/about-us"
                      ? "text-white font-medium border-b-2 border-blue-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-300"
                  } transition-all duration-300`}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/notice"
                      ? "text-white font-medium border-b-2 border-purple-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-purple-300"
                  } transition-all duration-300`}
                >
                  NOTICE
                </Link>
              </li>
              {teacherLoggedIn && (
                <li>
                  <Link
                    to="/routine"
                    className={`inline-block px-4 py-2 rounded-md ${
                      location.pathname === "/routine"
                        ? "text-white font-medium border-b-2 border-indigo-500"
                        : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-indigo-300"
                    } transition-all duration-300`}
                  >
                    ROUTINE
                  </Link>
                </li>
              )}
              {adminLoggedIn && (
                <li>
                  <Link
                    to="/routines"
                    className={`inline-block px-4 py-2 rounded-md ${
                      location.pathname === "/routines"
                        ? "text-white font-medium border-b-2 border-sky-500"
                        : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-sky-300"
                    } transition-all duration-300`}
                  >
                    ROUTINES
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="#"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/contact-us"
                      ? "text-white font-medium border-b-2 border-teal-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-teal-300"
                    } transition-all duration-300`}
                >
                  CONTACT US
                </Link>
              </li>
              {adminLoggedIn && (
                <li>
                  <Link
                    to="/create-notice"
                    className={`inline-block px-4 py-2 rounded-md ${
                      location.pathname === "/create-notice"
                        ? "text-white font-medium border-b-2 border-amber-500"
                        : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-amber-300"
                    } transition-all duration-300`}
                  >
                    NOTICE BOARD
                  </Link>
                </li>
              )}
              {adminLoggedIn && (
                <li
                  onMouseEnter={() => setshowDropDown(true)}
                  onMouseLeave={() => setshowDropDown(false)}
                  className="relative"
                >
                  <button 
                    className={`inline-flex items-center px-4 py-2 rounded-md ${
                      location.pathname === "/create-account-teacher" || location.pathname==="/create-account-student"
                        ? "text-white font-medium border-b-2 border-rose-500"
                        : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-rose-300"
                    } transition-all duration-300 cursor-pointer`}
                  >
                    CREATE ACCOUNT
                    <svg className={`ml-1.5 h-4 w-4 transform transition-transform duration-300 ${showDropDown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {showDropDown && (
                    <div
                      id="dropdownDelay"
                      className="absolute top-full right-0 mt-0 bg-gray-800 divide-y divide-gray-700 rounded-md shadow-xl w-60 z-50 border border-gray-700 overflow-hidden transform transition-all duration-300 origin-top-right"
                    >
                      <ul className="py-1">
                        <li>
                          <Link
                            to="/create-account-teacher"
                            className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                          >
                            <svg className="w-5 h-5 mr-2 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Create Teacher
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/create-account-student"
                            className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                          >
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            Create Student
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                          >
                            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
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
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/fetch-students"
                      ? "text-white font-medium border-b-2 border-emerald-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-emerald-300"
                  } transition-all duration-300`}
                >
                  STUDENTS
                </Link>
              </li>}
               {(adminLoggedIn) && <li>
                <Link
                  to="/update-class-structure"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/update-class-structure"
                      ? "text-white font-medium border-b-2 border-orange-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-orange-300"
                  } transition-all duration-300`}
                >
                  FEE STRUCTURE
                </Link>
              </li>}
               {(adminLoggedIn) && <li>
                <Link
                  to="/view-teachers-payroll"
                   className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/view-teachers-payroll"
                      ? "text-white font-medium border-b-2 border-emerald-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-emerald-300"
                  } transition-all duration-300`}
                >
                  TEACHERS PAYROLL
                </Link>
              </li>}
              
              <li className="ml-4">
                {!teacherLoggedIn && !studentLoggedIn && !adminLoggedIn ? (
                  <Link to={"/login-form"}>
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                      <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-10 group-hover:w-full transition-all duration-300"></span>
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        Login
                      </span>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-gray-700 bg-gray-100 rounded-full group"
                    onClick={handleLogout}
                  >
                    <span className="absolute top-0 left-0 w-0 h-full bg-rose-100 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-1.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Logout
                    </span>
                  </button>
                )}
              </li>
            </ul>
          </div>
          
          <div className="md:hidden flex items-center">
            {!teacherLoggedIn && !studentLoggedIn && !adminLoggedIn ? (
              <Link to={"/login-form"}>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full group"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-10 group-hover:w-full transition-all duration-300"></span>
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    Login
                  </span>
                </button>
              </Link>
            ) : (
              <button
                type="button"
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-gray-700 bg-gray-100 rounded-full group"
                onClick={handleLogout}
              >
                <span className="absolute top-0 left-0 w-0 h-full bg-rose-100 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative flex items-center">
                  <svg className="w-5 h-5 mr-1.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Logout
                </span>
              </button>
            )}
            
          </div>
        </div>
      </nav>
      <div className="pt-28"></div> {/* Increased spacer */}
    </div>
  );
};

export default Navbar;