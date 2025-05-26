import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios";
import { contextCreate } from "../../../Context";

const EditFeeRecord = () => {
  const {mode,setMode} = useContext(contextCreate);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const location = useLocation();

  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchOldRecord = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/getFee/${location.state?.id}`,
          { withCredentials: true }
        );
        setRecord(response.data);
        setValue(
          "adm_fee",
          response.data[0].records[location.state.month].adm_fee
        );
        setValue(
          "month_fee",
          response.data[0].records[location.state.month].month_fee
        );
        setValue(
          "comp_fee",
          response.data[0].records[location.state.month].comp_fee
        );
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    };

    fetchOldRecord();
  }, []);

  const updateRecord = async (data) => {
    try {
      if (window.confirm("Are you sure you want to make these changes?")) {
        const updatedRecord = {
          ...record[0],
          records: {
            ...record[0].records,
            [location.state.month]: {
              ...record[0].records[location.state.month],
              adm_fee: data.adm_fee,
              month_fee: data.month_fee,
              comp_fee: data.comp_fee,
            },
          },
        };
        setRecord([updatedRecord]);

        const response = await axios.patch(
          `${import.meta.env.VITE_BACKEND_URL}/editFee/${location.state.id}`,
          updatedRecord,
          { withCredentials: true }
        );

        alert(response.data);
        navigate("/fetch-students");
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
        {/* Main Card */}
        <div className={`transform transition-all duration-300 hover:scale-[1.01] ${
          mode === 'light'
            ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-blue-100'
            : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700'
        } rounded-2xl overflow-hidden`}>
          {/* Header Section */}
          <div className={`relative overflow-hidden ${
            mode === 'light'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
              : 'bg-gradient-to-r from-blue-600 to-indigo-700'
          }`}>
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center mb-3">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Edit Fee Record
              </h2>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">{location.state.month} Month Fee Details</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(updateRecord)} className="space-y-6">
              {/* Fee Input Fields */}
              {[
                { name: 'adm_fee', label: 'Admission Fee', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                { name: 'month_fee', label: 'Monthly Fee', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { name: 'comp_fee', label: 'Computer Fee', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((field) => (
                <div key={field.name} className={`group p-4 rounded-xl transition-all ${
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
                      {...register(field.name)}
                      className={`block w-full pl-12 pr-4 py-3.5 rounded-xl border transition-all ${
                        mode === 'light'
                          ? 'bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'
                          : 'bg-gray-700/50 border-gray-600 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400'
                      } placeholder-gray-400`}
                    />
                    {errors[field.name] && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors[field.name] && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors[field.name].message}
                    </p>
                  )}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/fetch-students" className="w-full sm:w-1/2 order-2 sm:order-1">
                  <button
                    type="button"
                    className={`w-full px-6 py-3.5 rounded-xl font-medium transition-all ${
                      mode === 'light'
                        ? 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        : 'bg-gray-700 text-white border border-gray-600 hover:bg-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      mode === 'light' ? 'focus:ring-gray-500' : 'focus:ring-gray-400'
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
                  } disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    'Update Record'
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

export default EditFeeRecord;
