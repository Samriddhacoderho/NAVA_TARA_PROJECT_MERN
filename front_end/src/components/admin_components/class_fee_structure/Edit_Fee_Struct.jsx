import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import axios from "axios";
import { contextCreate } from "../../../Context";

const Edit_Fee_Struct = () => {
  const {mode,setMode}=useContext(contextCreate);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const updateFeeFunc = async (data) => {
    try {
      console.log(data)
      if (window.confirm("Are you sure you want to perform this action?")) {
        const response = await axios.patch(
          `http://localhost:8000/fetch/class/edit/fee/${location.state?.structFee.class_name}`,data,{withCredentials:true}
        );
        alert(response.data);
        navigate("/update-class-structure");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };
  return location.state ? (
    <div className={`min-h-screen py-8 px-4 ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
    }`}>
      <div className="max-w-xl mx-auto">
        <div className={`transform transition-all duration-300 hover:scale-[1.01] ${
          mode === 'light'
            ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-blue-100'
            : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700'
        } rounded-2xl overflow-hidden`}>
          {/* Header */}
          <div className={`relative overflow-hidden ${
            mode === 'light'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
              : 'bg-gradient-to-r from-blue-600 to-indigo-700'
          }`}>
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Edit Fee Structure
              </h2>
              <p className="mt-2 text-blue-100 text-center text-sm">
                Class {location.state.structFee.class_name}
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(updateFeeFunc)} className="space-y-6">
              {/* Fee Input Fields */}
              {[
                { 
                  id: 'admission_fee',
                  label: 'Admission Fee',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                  defaultValue: location.state.structFee.admission_fee
                },
                {
                  id: 'monthly_fee',
                  label: 'Monthly Fee',
                  icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                  defaultValue: location.state.structFee.monthly_fee
                },
                {
                  id: 'comp_fee',
                  label: 'Computer Fee',
                  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  defaultValue: location.state.structFee.comp_fee
                }
              ].map((field) => (
                <div key={field.id} className={`group p-4 rounded-xl transition-all ${
                  mode === 'light'
                    ? 'hover:bg-gray-50'
                    : 'hover:bg-gray-700/50'
                }`}>
                  <label className={`block text-sm font-medium mb-2 ${
                    mode === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={field.icon} />
                      </svg>
                      <span>{field.label}</span>
                    </div>
                  </label>
                  <div className="relative">
                    <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-medium ${
                      mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>Rs.</span>
                    <input
                      type="number"
                      id={field.id}
                      {...register(field.id, {
                        required: "This cannot be left empty",
                        min: { value: 0, message: "Please enter a valid number" }
                      })}
                      defaultValue={field.defaultValue}
                      className={`block w-full pl-12 pr-4 py-3.5 rounded-xl border transition-all ${
                        mode === 'light'
                          ? 'bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'
                          : 'bg-gray-700/50 border-gray-600 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400'
                      }`}
                    />
                    {errors[field.id] && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors[field.id] && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors[field.id].message}
                    </p>
                  )}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/update-class-structure" className="w-full sm:w-1/2 order-2 sm:order-1">
                  <button
                    type="button"
                    className={`w-full px-6 py-3.5 rounded-xl font-medium transition-all ${
                      mode === 'light'
                        ? 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        : 'bg-gray-700 text-white border border-gray-600 hover:bg-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-1/2 px-6 py-3.5 rounded-xl font-medium text-white transition-all order-1 sm:order-2 ${
                    mode === 'light'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    'Update Fees'
                  )}
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

export default Edit_Fee_Struct;
