import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import NoAccess from "./NoAccess";
import { Link, useNavigate } from "react-router-dom";
import { contextCreate } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const {mode,setMode}=useContext(contextCreate)
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
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, data, {
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
    <div className={`min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
    }`}>
      <div className={`flex flex-col md:flex-row rounded-3xl shadow-2xl w-full max-w-7xl min-h-[80vh] overflow-hidden ${
      mode === 'light'
        ? 'bg-white/80 backdrop-blur-xl border border-blue-100'
        : 'bg-gray-800/80 backdrop-blur-xl border border-gray-700'
    }`}>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src="/loginPage_FRONTEND_PHOTO.jpg"
          alt="Login Page"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className={`w-full md:w-1/2 p-6 md:p-10 ${
        mode === 'light'
          ? 'bg-white/80'
          : 'bg-gray-800/90'
      } flex items-center justify-center`}>
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6 md:mb-10 text-center">
            <h2 className={`text-2xl md:text-3xl font-extrabold mb-2 tracking-tight ${
              mode === 'light'
                ? 'text-indigo-800'
                : 'text-indigo-400'
            }`}>
              Welcome back
            </h2>
            <p className={`${
              mode === 'light'
                ? 'text-gray-600'
                : 'text-gray-400'
            } text-sm md:text-base font-medium`}>
              Please sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit(formBackendFunc)} className="space-y-7">
            <div>
              <label htmlFor="email" className={`block text-sm font-semibold mb-1 ${
                mode === 'light'
                  ? 'text-indigo-700'
                  : 'text-indigo-400'
              }`}>
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`h-5 w-5 ${
                    mode === 'light'
                      ? 'text-indigo-400'
                      : 'text-indigo-500'
                  }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`appearance-none block w-full pl-10 pr-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 transition ${
                    mode === 'light'
                      ? 'bg-white border-indigo-200 focus:ring-indigo-400 focus:border-indigo-400 text-gray-900 placeholder-gray-400'
                      : 'bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400'
                  } ${errors.email ? 'border-red-400' : ''}`}
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
                <label htmlFor="password" className={`block text-sm font-semibold ${
                  mode === 'light'
                    ? 'text-indigo-700'
                    : 'text-indigo-400'
                }`}>
                  Password
                </label>
                <Link to="/reset-password" className={`text-xs font-semibold transition ${
                  mode === 'light'
                    ? 'text-indigo-500 hover:text-indigo-700'
                    : 'text-indigo-400 hover:text-indigo-300'
                }`}>
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`h-5 w-5 ${
                    mode === 'light'
                      ? 'text-indigo-400'
                      : 'text-indigo-500'
                  }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className={`appearance-none block w-full pl-10 pr-12 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 transition ${
                    mode === 'light'
                      ? 'bg-white border-indigo-200 focus:ring-indigo-400 focus:border-indigo-400 text-gray-900 placeholder-gray-400'
                      : 'bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400'
                  } ${errors.password ? 'border-red-400' : ''}`}
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
                    className={`h-5 w-5 transition ${
                      mode === 'light'
                        ? 'text-indigo-400 hover:text-indigo-600'
                        : 'text-indigo-500 hover:text-indigo-400'
                    }`}
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
                className={`w-full flex justify-center items-center py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  mode === 'light'
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed`}
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
