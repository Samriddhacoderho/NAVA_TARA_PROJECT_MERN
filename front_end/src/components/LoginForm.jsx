import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import NoAccess from "./NoAccess";
import { Link, useNavigate } from "react-router-dom";
import { contextCreate } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [showPass, setshowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const adminLoggedIn = document.cookie.includes("adminToken");
  const studentLoggedIn = document.cookie.includes("studentToken");
  const contextUse = useContext(contextCreate);
  const navigate = useNavigate();

  const passHandleFunc = () => {
    if (showPass) {
      setshowPass(false);
    } else {
      setshowPass(true);
    }
  };

  const formBackendFunc = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        withCredentials: true,
      });
      alert(response.data.alertMsg);
      contextUse.setName(response.data.name);
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  return !teacherLoggedIn && !adminLoggedIn && !studentLoggedIn ? (
    <div className="min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row border border-gray-200 rounded-3xl shadow-2xl w-full max-w-7xl min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden">
        <img
          className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-500 hover:scale-105"
          src="/loginPage_FRONTEND_PHOTO.jpg"
          alt="Login Page"
        />
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white flex items-center justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-6 md:mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-800 mb-2 tracking-tight drop-shadow">
                Welcome back
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                Please sign in to your account
              </p>
            </div>
            <form onSubmit={handleSubmit(formBackendFunc)} className="space-y-7">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-indigo-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={`appearance-none block w-full pl-10 pr-4 py-3 border ${
                      errors.email ? 'border-red-400' : 'border-indigo-200'
                    } rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50 placeholder-indigo-300 text-indigo-900 transition`}
                    {...register("email", {
                      required: "This cannot be left empty",
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-semibold text-indigo-700">
                    Password
                  </label>
                  <Link to="/reset-password" className="text-xs text-indigo-500 hover:text-indigo-700 font-semibold transition">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className={`appearance-none block w-full pl-10 pr-12 py-3 border ${
                      errors.password ? 'border-red-400' : 'border-indigo-200'
                    } rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50 placeholder-indigo-300 text-indigo-900 transition`}
                    {...register("password", {
                      required: "This cannot be left empty",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "Password is too long, max 30 characters accepted",
                      },
                    })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    <FontAwesomeIcon
                      onClick={passHandleFunc}
                      className="h-5 w-5 text-indigo-400 hover:text-indigo-600 transition"
                      icon={showPass ? faEyeSlash : faEye}
                    />
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.password.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 shadow-lg font-semibold text-lg transition-all duration-200"
                >
                  <svg className="h-5 w-5 mr-2 text-indigo-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NoAccess />
  );
};

export default LoginForm;
