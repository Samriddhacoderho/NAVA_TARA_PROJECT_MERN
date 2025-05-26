import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import { contextCreate } from "../../../Context";

const View_Class_Fee_Structure = () => {
  const navigate=useNavigate();
  const [showStructform, setshowStructform] = useState(false);
  const [structFee,setstructFee]=useState({});
  const {mode,setMode}=useContext(contextCreate);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const fetchClass_Stucture_Fees = async (data) => {
    try {
      if (showStructform) {
        setshowStructform(!showStructform);
        setstructFee({});
      } else {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/fetch/class/structure/fees/${data.class_name}`,
          { withCredentials: true }
        );
        setshowStructform(true);
        setstructFee({class_name:response.data.class_name,admission_fee:response.data.admission_fee,monthly_fee:response.data.monthly_fee,comp_fee:response.data.comp_fee,total:response.data.total});
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
      }
    }
  };

  const handleEdit=async()=>{
    try {
      navigate("/edit-fee-struct",{state:{structFee:structFee}})
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className={`min-h-screen py-8 px-4 ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
    }`}>
      <div className="max-w-2xl mx-auto">
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
                Class Fee Structure
              </h2>
              <p className="mt-2 text-blue-100 text-center text-sm">
                View and manage class-wise fee structure
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(fetchClass_Stucture_Fees)} className="space-y-6">
              <div className={`p-4 rounded-xl ${
                mode === 'light'
                  ? 'bg-gray-50 border border-gray-100'
                  : 'bg-gray-700/50 border border-gray-600'
              }`}>
                <label className={`block text-sm font-medium mb-2 ${
                  mode === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Select Class</span>
                  </div>
                </label>
                <select
                  {...register("class_name", { required: "This is required" })}
                  className={`w-full px-4 py-3 rounded-xl transition-colors ${
                    mode === 'light'
                      ? 'bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                      : 'bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400'
                  }`}
                >
                  <option value="">-- Select Class --</option>
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <option key={num} value={num}>Class {num}</option>
                  ))}
                </select>
                {errors.class_name && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.class_name.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3.5 rounded-xl font-medium text-white transition-all ${
                  mode === 'light'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-500 hover:bg-blue-600'
                } disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {showStructform ? "Hide Fee Structure" : "Show Fee Structure"}
              </button>
            </form>

            {showStructform && (
              <div className={`mt-8 rounded-xl overflow-hidden ${
                mode === 'light'
                  ? 'bg-gray-50 border border-gray-100'
                  : 'bg-gray-700/50 border border-gray-600'
              }`}>
                <div className={`p-4 ${
                  mode === 'light'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600'
                }`}>
                  <h3 className="text-xl font-semibold text-white text-center">
                    Fee Structure for Class {structFee.class_name}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  {[
                    { label: 'Admission Fee', value: structFee.admission_fee },
                    { label: 'Monthly Fee', value: structFee.monthly_fee },
                    { label: 'Computer Fee', value: structFee.comp_fee },
                    { label: 'Total Fee', value: structFee.total, isTotal: true }
                  ].map((item, index) => (
                    <div key={index} className={`group p-4 rounded-xl transition-all ${
                      mode === 'light'
                        ? item.isTotal 
                          ? 'bg-blue-50 border border-blue-100'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                        : item.isTotal
                          ? 'bg-blue-900/30 border border-blue-800'
                          : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${
                          mode === 'light'
                            ? item.isTotal ? 'text-blue-700' : 'text-gray-600'
                            : item.isTotal ? 'text-blue-400' : 'text-gray-300'
                        }`}>{item.label}</span>
                        <span className={`font-bold ${
                          mode === 'light'
                            ? item.isTotal ? 'text-blue-700' : 'text-gray-900'
                            : item.isTotal ? 'text-blue-400' : 'text-white'
                        }`}>Rs. {item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={handleEdit}
                    className={`w-full px-6 py-3.5 rounded-xl font-medium transition-all ${
                      mode === 'light'
                        ? 'bg-gray-900 hover:bg-gray-800 text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    Edit Fee Structure
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_Class_Fee_Structure;
