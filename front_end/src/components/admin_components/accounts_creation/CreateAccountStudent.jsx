import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import { contextCreate } from "../../../Context";

const CreateAccountStudent = () => {
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
  const createStudent = async (data) => {
    try {
      if (window.confirm("Are you sure you want to create this account?")) {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/create/student`,
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
        {/* Left Image Section */}
        <div className="relative hidden lg:block w-[45%]">
          <img
            src="/CreateAccountStudent.png"
            alt="Student studying"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
            <h2 className="text-5xl font-bold leading-tight">
              Create Student Account
            </h2>
            <p className="mt-4 text-xl opacity-90 max-w-xl">
              Add new students to Nawatara English School's digital platform
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className={`w-full lg:w-[55%] ${
        mode === "light" ? "bg-white" : "bg-[#1e293b]"
      } p-4 sm:p-8 lg:p-12 overflow-y-auto`}>
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className={`text-2xl sm:text-3xl font-bold ${
              mode === "light" ? "text-gray-900" : "text-white"
            }`}>
                Create Student Account
              </h2>
              <p className={`mt-2 sm:mt-3 text-sm sm:text-base ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            }`}>
                Please fill in the student's details below
              </p>
            </div>

            <form onSubmit={handleSubmit(createStudent)} className="space-y-4 sm:space-y-6">
              {/* Basic Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className={`text-xs sm:text-sm font-medium ${
                  mode === "light" ? "text-gray-700" : "text-gray-200"
                }`}>
                    Student's Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "This cannot be left empty" })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                    mode === "light"
                      ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  }`}
                    placeholder="Enter student's name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className={`text-xs sm:text-sm font-medium ${
                  mode === "light" ? "text-gray-700" : "text-gray-200"
                }`}>
                    Class
                  </label>
                  <input
                    type="number"
                    {...register("class_name", {
                      required: "This cannot be left empty",
                      min: { value: 1, message: "Please enter class from 1 to 7" },
                      max: { value: 7, message: "Please enter class from 1 to 7" },
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                      mode === "light"
                        ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    }`}
                    placeholder="Enter class (1-7)"
                  />
                  {errors.class_name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.class_name.message}</p>
                  )}
                </div>
              </div>

              {/* Parents Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    {...register("father_name", {
                      required: "This cannot be left empty",
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                      mode === "light"
                        ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    }`}
                    placeholder="Enter father's name"
                  />
                  {errors.father_name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.father_name.message}</p>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Father's Phone
                  </label>
                  <input
                    type="text"
                    {...register("father_phone", {
                      required: "This cannot be left empty",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                      mode === "light"
                        ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    }`}
                    placeholder="Enter father's phone number"
                  />
                  {errors.father_phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.father_phone.message}</p>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    {...register("mother_name", {
                      required: "This cannot be left empty",
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                      mode === "light"
                        ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    }`}
                    placeholder="Enter mother's name"
                  />
                  {errors.mother_name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.mother_name.message}</p>
                  )}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Mother's Phone
                  </label>
                  <input
                    type="text"
                    {...register("mother_phone", {
                      required: "This cannot be left empty",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                      mode === "light"
                        ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    }`}
                    placeholder="Enter mother's phone number"
                  />
                  {errors.mother_phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.mother_phone.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  {...register("address", {
                    required: "This cannot be left empty",
                  })}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                    mode === "light"
                      ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  }`}
                  placeholder="Enter complete address"
                />
                {errors.address && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.address.message}</p>
                )}
              </div>

              {/* Login Information Section */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "This cannot be left empty",
                  })}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border transition-colors duration-200 ${
                    mode === "light"
                      ? "border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      : "border-gray-600 bg-[#1e293b] text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">Password</label>
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
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={passHandleFunc}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FontAwesomeIcon
                      icon={showPass ? faEyeSlash : faEye}
                      className="h-5 w-5"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                mode === "light"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-2 sm:py-3 text-sm sm:text-base rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-6 sm:mt-8`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-white" 
                         xmlns="http://www.w3.org/2000/svg" 
                         fill="none" 
                         viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
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

export default CreateAccountStudent;
