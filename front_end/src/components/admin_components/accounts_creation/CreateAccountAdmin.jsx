import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import { contextCreate } from "../../../Context";

const CreateAccountAdmin = () => {
    const {mode,setMode,userType} = useContext(contextCreate);
  const [showPass, setshowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const passHandleFunc = () => {
    if (showPass) {
      setshowPass(false);
    } else {
      setshowPass(true);
    }
  };

  const createAdmin = async (data) => {
    try {
      if (window.confirm("Are you sure you want to create this account?")) {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/create/admin`,
          data,
          { withCredentials: true }
        );
        alert(response.data);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  return userType==="admin" ? (
    <div className={`min-h-screen flex items-center justify-center ${
      mode === "light" ? "bg-[#f5f5f5]" : "bg-[#0f172a]"
    } py-6 sm:py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="flex w-full max-w-[90rem] min-h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
        {/* Left Image Section - Added responsive hidden */}
        <div className="relative hidden lg:block w-[45%]">
          <img
            src="/CreateAccountAdmin.png"
            alt="Admin dashboard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
            <h2 className="text-5xl font-bold leading-tight">Create Admin Account</h2>
            <p className="mt-4 text-xl opacity-90 max-w-xl">
              Add new administrators to Nawatara English School's digital platform
            </p>
          </div>
        </div>

        {/* Right Form Section - Added responsive padding and width */}
        <div className={`w-full lg:w-[55%] ${
          mode === "light" ? "bg-white" : "bg-[#1e293b]"
        } p-4 sm:p-8 lg:p-20 flex items-center justify-center`}>
          <div className="w-full max-w-md space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className={`text-2xl sm:text-3xl font-bold ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}>Welcome</h2>
              <p className={`mt-2 sm:mt-3 text-sm sm:text-base ${
                mode === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
                Please fill in the administrator's details below
              </p>
            </div>

            <form onSubmit={handleSubmit(createAdmin)} className="space-y-4 sm:space-y-6">
              {/* Grid for form fields - Added responsive grid */}
              <div className="space-y-4 sm:space-y-6">
                {/* Admin's Name - Added responsive text and padding */}
                <div className="space-y-1 sm:space-y-2">
                  <label className={`text-xs sm:text-sm font-medium ${
                    mode === "light" ? "text-gray-700" : "text-gray-200"
                  }`}>
                    Admin's Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("name", { required: "This cannot be left empty" })}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                        mode === "light"
                          ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      }`}
                      placeholder="Enter admin's full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* Admin's Email - Responsive classes applied */}
                <div className="space-y-1 sm:space-y-2">
                  <label className={`text-xs sm:text-sm font-medium ${
                    mode === "light" ? "text-gray-700" : "text-gray-200"
                  }`}>
                    Admin's Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", { required: "This cannot be left empty" })}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                        mode === "light"
                          ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      }`}
                      placeholder="Enter admin's email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Admin's Password - Responsive classes applied */}
                <div className="space-y-1 sm:space-y-2">
                  <label className={`text-xs sm:text-sm font-medium ${
                    mode === "light" ? "text-gray-700" : "text-gray-200"
                  }`}>
                    Admin's Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
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
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                        mode === "light"
                          ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      }`}
                      placeholder="Create a secure password"
                    />
                    <button
                      type="button"
                      onClick={passHandleFunc}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                        mode === "light" ? "text-gray-400 hover:text-gray-600" : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={showPass ? faEyeSlash : faEye}
                        className="h-5 w-5"
                      />
                    </button>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button - Added responsive padding and text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  mode === "light"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white py-2 sm:py-3 text-sm sm:text-base rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NoAccess />
  );
};

export default CreateAccountAdmin;
