import React, { useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { contextCreate } from "../../Context"

const CodeCheck = (props) => {
    const { mode } = useContext(contextCreate);

    useEffect(()=>{
        setTimeout(() => {
          props.setCode(Math.floor(100000 + Math.random() * 900000));
        }, 30000);
      },[]);
      
        const checkCode_func=async(data)=>{
            try {
                if(Number(data.code)===props.resetCode)
                {
                  alert("Your OTP Code is correct!")
                  props.setshowResetForm(true);
                }
                else
                {
                    alert("Your OTP Code is incorrect or otp validity expired")
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
        }
        const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
      return (
        <div className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 ${
            mode === 'light'
                ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
                : 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
        }`}>
            <div className={`w-full max-w-xl transform transition-all duration-300 hover:scale-[1.01] ${
                mode === 'light'
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-100'
                    : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700'
            } rounded-3xl overflow-hidden`}>
                {/* Header Section */}
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
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                            Verify Your Identity
                        </h2>
                        <p className="text-blue-100 text-center text-sm max-w-md">
                            Please enter the 6-digit verification code we sent to your email
                        </p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                {/* Form Section */}
                <div className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit(checkCode_func)}>
                        <div className={`group p-6 rounded-2xl transition-all ${
                            mode === 'light'
                                ? 'bg-gray-50 hover:bg-gray-100'
                                : 'bg-gray-800 hover:bg-gray-700'
                        }`}>
                            <label className={`block text-base font-medium mb-3 ${
                                mode === 'light' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Verification Code</span>
                                    </div>
                                    <span className={`text-sm ${
                                        mode === 'light' ? 'text-red-600' : 'text-red-400'
                                    }`}>
                                        Expires in 30 seconds
                                    </span>
                                </div>
                            </label>
                            <div className="relative">
                                <input
                                    id="code"
                                    type="number"
                                    placeholder="Enter your 6-digit OTP here"
                                    {...register("code", { required: "Please enter the verification code" })}
                                    className={`block w-full pl-12 pr-4 py-4 rounded-xl text-lg border-2 transition-all ${
                                        mode === 'light'
                                            ? 'bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder-gray-400'
                                            : 'bg-gray-900 border-gray-600 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder-gray-500'
                                    } ${errors.code ? 'border-red-400 focus:border-red-500' : ''}`}
                                />
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className={`w-5 h-5 ${
                                        mode === 'light' ? 'text-gray-400' : 'text-gray-500'
                                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                    </svg>
                                </div>
                            </div>
                            {errors.code && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.code.message}
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
                                    Verifying...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Verify Code
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CodeCheck;
