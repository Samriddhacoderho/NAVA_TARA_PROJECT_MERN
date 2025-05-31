import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { contextCreate } from "../Context";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showDropDown, setshowDropDown] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const {mode,setMode,userType,setUserType}=useContext(contextCreate)
  const handleLogout = async () => {
    try {
      if (window.confirm("Are you sure you want to log out?")) {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/logout`,
          {},
          { withCredentials: true }
        );
        alert(response.data);
        localStorage.clear();
        setUserType("");
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
  

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setMode(isToggled ? 'light' : 'dark');
  }
  return (
    <div>
      <nav className="bg-gray-900 fixed w-full z-[998] top-0 start-0 border-b-2 border-gray-800 shadow-xl backdrop-blur-sm bg-opacity-95">
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo - Keep your existing logo code */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg focus:ring-2 focus:ring-gray-600"
          >
            <div className="relative w-6 h-6 z-100">
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-current top-3 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>

          {/* Desktop Menu - Keep your existing menu items */}
          <div className="hidden md:flex md:items-center md:space-x-1" id="navbar-sticky">
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
              {userType==="teacher" && (
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
              {userType==="admin" && (
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
                  to="/contact-us"
                  className={`inline-block px-4 py-2 rounded-md ${
                    location.pathname === "/contact-us"
                      ? "text-white font-medium border-b-2 border-teal-500"
                      : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-teal-300"
                    } transition-all duration-300`}
                >
                  CONTACT US
                </Link>
              </li>
              {userType==="admin" && (
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
              {userType==="admin" && (
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
                            to="/create-account-admin"
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
              {(userType==="admin" || "teacher") && <li>
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
               {(userType==="admin") && <li>
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
               {(userType==="admin") && <li>
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
                {userType.length===0? (
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
              <li className="ml-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className={`
                      relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 
                      border-transparent transition-colors duration-200 ease-in-out 
                      ${isToggled ? 'bg-indigo-600' : 'bg-gray-600'}
                    `}
                    role="switch"
                    aria-checked={isToggled}
                    onClick={handleToggle}
                  >
                    <span className="sr-only">Toggle theme</span>
                    <span
                      aria-hidden="true"
                      className={`
                        pointer-events-none inline-block h-5 w-5 transform rounded-full 
                        bg-white shadow ring-0 transition duration-200 ease-in-out
                        ${isToggled ? 'translate-x-5' : 'translate-x-0'}
                      `}
                    />
                  </button>
                  <span className="ml-3 text-sm font-medium text-gray-300">
                    {isToggled ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Sidebar */}
          <div className={`fixed inset-y-0 right-0 z-[1000] w-64 bg-gray-900/100 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}>
            {/* Mobile Menu Header - Update background */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
              <span className="text-xl font-semibold text-white">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items - Enhanced UI */}
            <div className="py-4 overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-r-2xl shadow-2xl">
              <ul className="space-y-2 px-4">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                      location.pathname === "/"
                        ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg"
                        : "text-gray-200 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 hover:text-white"
                    } transition-all duration-300`}
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                      location.pathname === "/about-us"
                        ? "bg-gradient-to-r from-cyan-700 to-blue-700 text-white shadow-lg"
                        : "text-gray-200 hover:bg-gradient-to-r hover:from-cyan-800 hover:to-blue-800 hover:text-white"
                    } transition-all duration-300`}
                  >
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path strokeWidth="2" d="M12 16v-4M12 8h.01" />
                    </svg>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    to="/notice"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                      location.pathname === "/notice"
                        ? "bg-gradient-to-r from-purple-700 to-pink-700 text-white shadow-lg"
                        : "text-gray-200 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-800 hover:text-white"
                    } transition-all duration-300`}
                  >
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" d="M8 7h13M8 11h13M8 15h13M8 19h13M3 7h.01M3 11h.01M3 15h.01M3 19h.01" />
                    </svg>
                    NOTICE
                  </Link>
                </li>
                {userType === "teacher" && (
                  <li>
                    <Link
                      to="/routine"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/routine"
                          ? "bg-gradient-to-r from-indigo-700 to-blue-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-blue-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                        <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      ROUTINE
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/routines"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/routines"
                          ? "bg-gradient-to-r from-sky-700 to-blue-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-sky-800 hover:to-blue-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                        <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      ROUTINES
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                      location.pathname === "/contact-us"
                        ? "bg-gradient-to-r from-teal-700 to-green-700 text-white shadow-lg"
                        : "text-gray-200 hover:bg-gradient-to-r hover:from-teal-800 hover:to-green-800 hover:text-white"
                    } transition-all duration-300`}
                  >
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeWidth="2" d="M9 10h6M12 7v6" />
                    </svg>
                    CONTACT US
                  </Link>
                </li>
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/create-notice"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/create-notice"
                          ? "bg-gradient-to-r from-amber-700 to-yellow-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-amber-800 hover:to-yellow-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" d="M12 20h9" />
                        <path strokeWidth="2" d="M12 4v16m0 0H3" />
                      </svg>
                      NOTICE BOARD
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/create-account-teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/create-account-teacher"
                          ? "bg-gradient-to-r from-rose-700 to-pink-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-rose-800 hover:to-pink-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="7" r="4" strokeWidth="2" />
                        <path strokeWidth="2" d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                      </svg>
                      CREATE TEACHER
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/create-account-student"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/create-account-student"
                          ? "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="7" r="4" strokeWidth="2" />
                        <path strokeWidth="2" d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                      </svg>
                      CREATE STUDENT
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/create-account-admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/create-account-admin"
                          ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="7" r="4" strokeWidth="2" />
                        <path strokeWidth="2" d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
                      </svg>
                      CREATE ADMIN
                    </Link>
                  </li>
                )}
                {(userType === "admin" || userType === "teacher") && (
                  <li>
                    <Link
                      to="/fetch-students"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/fetch-students"
                          ? "bg-gradient-to-r from-emerald-700 to-green-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-emerald-800 hover:to-green-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                        <path strokeWidth="2" d="M8 10h8M8 14h8M8 18h8" />
                      </svg>
                      STUDENTS
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/update-class-structure"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/update-class-structure"
                          ? "bg-gradient-to-r from-orange-700 to-yellow-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-orange-800 hover:to-yellow-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                        <path strokeWidth="2" d="M8 10h8M8 14h8M8 18h8" />
                      </svg>
                      FEE STRUCTURE
                    </Link>
                  </li>
                )}
                {userType === "admin" && (
                  <li>
                    <Link
                      to="/view-teachers-payroll"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-base tracking-wide shadow-sm ${
                        location.pathname === "/view-teachers-payroll"
                          ? "bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg"
                          : "text-gray-200 hover:bg-gradient-to-r hover:from-emerald-800 hover:to-teal-800 hover:text-white"
                      } transition-all duration-300`}
                    >
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                        <path strokeWidth="2" d="M8 10h8M8 14h8M8 18h8" />
                      </svg>
                      TEACHERS PAYROLL
                    </Link>
                  </li>
                )}
                <li>
                  {userType.length === 0 ? (
                    <Link to={"/login-form"} onClick={() => setIsMobileMenuOpen(false)}>
                      <button
                        type="button"
                        className="w-full flex items-center gap-3 justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        Login
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="w-full flex items-center gap-3 justify-center px-6 py-3 font-semibold text-gray-700 bg-gray-100 rounded-full shadow-lg hover:bg-rose-100 transition-all duration-300"
                      onClick={handleLogout}
                    >
                      <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Logout
                    </button>
                  )}
                </li>
                <li>
                  <div className="flex items-center justify-center mt-2">
                    <button
                      type="button"
                      className={`
                        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 
                        border-transparent transition-colors duration-200 ease-in-out 
                        ${isToggled ? 'bg-indigo-600' : 'bg-gray-600'}
                      `}
                      role="switch"
                      aria-checked={isToggled}
                      onClick={handleToggle}
                    >
                      <span className="sr-only">Toggle theme</span>
                      <span
                        aria-hidden="true"
                        className={`
                          pointer-events-none inline-block h-5 w-5 transform rounded-full 
                          bg-white shadow ring-0 transition duration-200 ease-in-out
                          ${isToggled ? 'translate-x-5' : 'translate-x-0'}
                        `}
                      />
                    </button>
                    <span className="ml-3 text-sm font-medium text-gray-300">
                      {isToggled ? 'Disable Dark Mode' : 'Enable Dark Mode'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </div>
      </nav>
      <div className="pt-28"></div> {/* Increased spacer */}
    </div>
  );
};

export default Navbar;