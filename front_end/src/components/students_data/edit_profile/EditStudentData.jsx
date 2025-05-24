import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios";
import { contextCreate } from "../../../Context";

const EditStudentData = () => {
  const {mode,setMode}=useContext(contextCreate);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const location = useLocation();
  const navigate=useNavigate();
  const editStudent = async (data) => {
    try {
      if(window.confirm("Are you sure you want to make these changes?"))
      {
        const response=await axios.patch(`http://localhost:8000/editStudent/${location.state.student._id}`,data,{withCredentials:true})
        alert(response.data);
        navigate("/fetch-students");
      }
    } catch (error) {
      if(error.response)
      {
        alert(error.response.data);
      }
      else
      {
        alert(error.message);
      }
    }
  };
  return location.state ? (
    <div className={`min-h-screen ${
      mode === 'light'
        ? 'bg-blue-50'
        : 'bg-gradient-to-br from-gray-900 to-blue-900'
    } py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${
          mode === 'light'
            ? 'bg-white shadow-md'
            : 'bg-gray-800 shadow-xl'
        } rounded-3xl overflow-hidden`}>
          
          {/* Header */}
          <div className={`${
            mode === 'light'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
              : 'bg-gradient-to-r from-blue-500 to-indigo-600'
          } p-8`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
              Student Account Update
            </h2>
            <p className="text-blue-50 text-center text-sm sm:text-base">
              Nawatara English School
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleSubmit(editStudent)} className="space-y-8">
              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Student's Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "This cannot be left empty" })}
                    defaultValue={location.state.student.name}
                    className={`block w-full px-4 py-3 rounded-xl border ${
                      mode === 'light'
                        ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                        : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Class
                  </label>
                  <input
                    type="number"
                    {...register("class_name", {
                      required: "This cannot be left empty",
                      min: { value: 1, message: "Please enter class from 1 to 7" },
                      max: { value: 7, message: "Please enter class from 1 to 7" },
                    })}
                    defaultValue={location.state.student.class_name}
                    className={`block w-full px-4 py-3 rounded-xl border ${
                      mode === 'light'
                        ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                        : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                    }`}
                  />
                </div>
              </div>

              {/* Parent Information */}
              <div className={`${
                mode === 'light'
                  ? 'bg-gray-50 border border-gray-100'
                  : 'bg-gray-700/50 border border-gray-600'
              } rounded-xl p-6`}>
                <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Parent Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Father's Details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-600">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        {...register("father_name", { required: "Required" })}
                        defaultValue={location.state.student.father_name}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          mode === 'light'
                            ? 'border-gray-200 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-600">
                        Father's Phone
                      </label>
                      <input
                        type="text"
                        {...register("father_phone", {
                          required: "Required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter valid 10-digit number"
                          }
                        })}
                        defaultValue={location.state.student.father_phone}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          mode === 'light'
                            ? 'border-gray-200 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mother's Details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-600">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        {...register("mother_name", { required: "Required" })}
                        defaultValue={location.state.student.mother_name}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          mode === 'light'
                            ? 'border-gray-200 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-600">
                        Mother's Phone
                      </label>
                      <input
                        type="text"
                        {...register("mother_phone", {
                          required: "Required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter valid 10-digit number"
                          }
                        })}
                        defaultValue={location.state.student.mother_phone}
                        className={`block w-full px-4 py-3 rounded-xl border ${
                          mode === 'light'
                            ? 'border-gray-200 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className={`${
                mode === 'light'
                  ? 'bg-gray-50 border border-gray-100'
                  : 'bg-gray-700/50 border border-gray-600'
              } rounded-xl p-6`}>
                <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: "Required" })}
                      defaultValue={location.state.student.email}
                      className={`block w-full px-4 py-3 rounded-xl border ${
                        mode === 'light'
                          ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                          : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Address
                    </label>
                    <input
                      type="text"
                      {...register("address", { required: "Required" })}
                      defaultValue={location.state.student.address}
                      className={`block w-full px-4 py-3 rounded-xl border ${
                        mode === 'light'
                          ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                          : 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 pt-6">
                <Link to="/fetch-students" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className={`w-full px-6 py-3 text-sm font-medium rounded-xl border transition-colors ${
                      mode === 'light'
                        ? 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50'
                        : 'border-gray-600 text-white bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Updating..." : "Update Account"}
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
export default EditStudentData;
