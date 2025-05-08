import React, { useState } from "react";
import NoAccess from "../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CreateAccountStudent = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
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
          "http://localhost:8000/create/student",
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
  return adminLoggedIn ? (
    <div>
      <div className="justify-center">
        <div className="flex items-start justify-center pt-32">
          <div className="bg-gray-200 shadow-lg rounded-xl p-8 max-w-lg border border-gray-200 mb-5">
            <form onSubmit={handleSubmit(createStudent)}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Navatara English School:Student Account Creation Form
              </h2>
              <div className="flex flex-row">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Student's name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter student's name here:"
                  {...register("name", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="mx-8 mb-5">
                <label
                  htmlFor="class_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Student's class:
                </label>
                <input
                  type="number"
                  id="class_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter student's class here:"
                  {...register("class_name", {
                    required: "This cannot be left empty",
                    min: {
                      value: 1,
                      message: "Please enter class from 1 to 7",
                    },
                    max: {
                      value: 7,
                      message: "Please enter class from 1 to 7",
                    },
                  })}
                />
                {errors.class_name && (
                  <p className="text-red-500">{errors.class_name.message}</p>
                )}
              </div>
              </div>
             
              <div className="flex flex-row">
              <div className="mb-5">
                <label
                  htmlFor="father_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Father's name:
                </label>
                <input
                  type="text"
                  id="father_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter father's name here:"
                  {...register("father_name", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.father_name && (
                  <p className="text-red-500">{errors.father_name.message}</p>
                )}
              </div>
              <div className="mx-8 mb-5">
                <label
                  htmlFor="father_phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Father's number:
                </label>
                <input
                  type="text"
                  id="father_phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter father's number here:"
                  {...register("father_phone", {
                    required: "This cannot be left empty",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                />
                {errors.father_phone && (
                  <p className="text-red-500">{errors.father_phone.message}</p>
                )}
              </div>
              </div>
              <div className="flex flex-row">
              <div className="mb-5">
                <label
                  htmlFor="mother_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mother's name:
                </label>
                <input
                  type="text"
                  id="mother_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter mother's name here:"
                  {...register("mother_name", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.mother_name && (
                  <p className="text-red-500">{errors.mother_name.message}</p>
                )}
              </div>
              <div className="mx-8 mb-5">
                <label
                  htmlFor="mother_phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mother's number:
                </label>
                <input
                  type="text"
                  id="mother_phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter mother's number here:"
                  {...register("mother_phone", {
                    required: "This cannot be left empty",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                />
                {errors.mother_phone && (
                  <p className="text-red-500">{errors.mother_phone.message}</p>
                )}
              </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Student's Address:
                </label>
                <input
                  type="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter student's address here:"
                  {...register("address", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Student's email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter student's email id here:"
                  {...register("email", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Student's password:
                </label>
                <div className="flex flex-row">
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    placeholder="Enter student's valid password here:"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...register("password", {
                      required: "This cannot be left empty",
                      minLength: {
                        value: 8,
                        message: "Password must be atleast 8 characters",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "Password is too long, max 30 characters accepted",
                      },
                    })}
                  />
                  {!showPass && (
                    <FontAwesomeIcon
                      onClick={passHandleFunc}
                      className="mt-3 ml-3 cursor-pointer"
                      icon={faEye}
                    />
                  )}
                  {showPass && (
                    <FontAwesomeIcon
                      onClick={passHandleFunc}
                      className="mt-3 ml-3 cursor-pointer"
                      icon={faEyeSlash}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account" : "Create Account"}
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
