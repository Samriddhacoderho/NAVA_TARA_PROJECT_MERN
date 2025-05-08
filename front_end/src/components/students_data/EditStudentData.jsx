import React from "react";
import { useLocation } from "react-router-dom";
import NoAccess from "../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditStudentData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const location = useLocation();
  const editStudent = async (data) => {
    try {
        const response=await axios.patch("")
    } catch (error) {}
  };
  return location.state ? (
    <div>
      <div className="justify-center">
        <div className="flex items-start justify-center pt-32">
          <div className="bg-gray-200 shadow-lg rounded-xl p-8 max-w-lg border border-gray-200 mb-5">
            <form onSubmit={handleSubmit(editStudent)}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Navatara English School:Student Account Updation Form
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
                    defaultValue={location.state.student.name}
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
                    defaultValue={location.state.student.class_name}
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
                    defaultValue={location.state.student.father_name}
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
                    defaultValue={location.state.student.father_phone}
                    {...register("father_phone", {
                      required: "This cannot be left empty",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                  />
                  {errors.father_phone && (
                    <p className="text-red-500">
                      {errors.father_phone.message}
                    </p>
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
                    defaultValue={location.state.student.mother_name}
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
                    defaultValue={location.state.student.mother_phone}
                    {...register("mother_phone", {
                      required: "This cannot be left empty",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                  />
                  {errors.mother_phone && (
                    <p className="text-red-500">
                      {errors.mother_phone.message}
                    </p>
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
                  defaultValue={location.state.student.address}
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
                  defaultValue={location.state.student.email}
                  {...register("email", {
                    required: "This cannot be left empty",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating Account" : "Update Account"}
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
export default EditStudentData;
