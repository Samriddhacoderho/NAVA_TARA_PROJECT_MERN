import axios from "axios";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { contextCreate } from "../../Context";
import CodeCheck from "./CodeCheck";
import NewPassForm from "./NewPassForm";

const EmailAsk = () => {
    const { mode } = useContext(contextCreate);
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
    const [code,setCode]=useState(0);
    const [showResetForm,setshowResetForm]=useState(false);
    const [roleData,setroleData]=useState({});
    const checkEmail_func=async(data)=>{
        try {
            const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/reset/password/${data.email}`);
            setCode(response.data.resetCode);
            setroleData({email:data.email,role:response.data.role})
        } catch (error) {
            if(error.response)
            {
                alert(error.response.data)
            }
            else
            {
                alert(error.message)
            }
        }
    }
  return (
    (code === 0 && !showResetForm) ? (
        <div className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 ${
            mode === 'light'
                ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
                : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
        }`}>
            {/* Main Header */}
            <div className="max-w-2xl mx-auto text-center mb-8">
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                    mode === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                    Reset Your Password
                </h1>
                <p className={`text-lg ${
                    mode === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                    Don't worry! It happens. Please enter the email address <br className="hidden sm:block" />
                    associated with your account.
                </p>
            </div>

            <div className={`w-full max-w-xl transform transition-all duration-300 hover:scale-[1.01] ${
                mode === 'light'
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-100'
                    : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700'
            } rounded-3xl overflow-hidden`}>
                {/* Card Header */}
                <div className={`relative overflow-hidden ${
                    mode === 'light'
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                        : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                } p-8`}>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                            mode === 'light' ? 'bg-white/20' : 'bg-white/10'
                        }`}>
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                            Password Recovery
                        </h2>
                        <p className="text-blue-100 text-center text-sm max-w-md">
                            We'll send a secure reset code to your email address to verify your identity
                        </p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                {/* Form Section */}
                <div className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit(checkEmail_func)}>
                        <div className={`group p-6 rounded-2xl transition-all ${
                            mode === 'light'
                                ? 'bg-gray-50 hover:bg-gray-100'
                                : 'bg-gray-800 hover:bg-gray-700'
                        }`}>
                            <label className={`block text-base font-medium mb-3 ${
                                mode === 'light' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <span>Email Address</span>
                                </div>
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    {...register("email", { required: "Please enter your email address" })}
                                    className={`block w-full pl-12 pr-4 py-4 rounded-xl text-lg border-2 transition-all ${
                                        mode === 'light'
                                            ? 'bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder-gray-400'
                                            : 'bg-gray-900 border-gray-600 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder-gray-500'
                                    } ${errors.email ? 'border-red-400 focus:border-red-500' : ''}`}
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className={`w-5 h-5 ${
                                        mode === 'light' ? 'text-gray-400' : 'text-gray-500'
                                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                {errors.email && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center items-center py-4 px-6 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.02] ${
                                mode === 'light'
                                    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white shadow-lg'
                                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg'
                            } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Reset Code
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    ) : !showResetForm ? (
        <CodeCheck resetCode={code} setCode={setCode} setshowResetForm={setshowResetForm}/>
    ) : (
        <NewPassForm email={roleData.email} role={roleData.role}/>
    ))
};

export default EmailAsk;
