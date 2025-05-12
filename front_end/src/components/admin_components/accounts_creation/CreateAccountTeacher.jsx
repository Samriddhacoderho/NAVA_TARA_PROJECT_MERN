import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";

const CreateAccountTeacher = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const [showPass, setshowPass] = useState(false);
  const navigate=useNavigate();
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
  const createTeacher = async (data) => {
    try {
      if (window.confirm("Are you sure you want to create this account?")) {
        const response = await axios.post(
          "http://localhost:8000/create/teacher",
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
      <div className="h-screen flex items-center justify-center">
        <div className="min-h-screen flex items-start justify-center pt-32">
          <div className="bg-gray-200 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-200">
            <form onSubmit={handleSubmit(createTeacher)}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Navatara English School:Teacher Account Creation Form
              </h2>

              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teacher's name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter teacher's name here:"
                  {...register("name", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teacher's email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter teacher's email id here:"
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
                  Teacher's password:
                </label>
                <div className="flex flex-row">
                  <input
                    type={showPass?"text":"password"}
                    id="password"
                    placeholder="Enter teacher's valid password here:"
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
                  {!showPass && <FontAwesomeIcon
                    onClick={passHandleFunc}
                    className="mt-3 ml-3 cursor-pointer"
                    icon={faEye}
                  />}
                  {showPass && <FontAwesomeIcon
                    onClick={passHandleFunc}
                    className="mt-3 ml-3 cursor-pointer"
                    icon={faEyeSlash}
                  />}
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
    <NoAccess/>
  );
};

export default CreateAccountTeacher;
