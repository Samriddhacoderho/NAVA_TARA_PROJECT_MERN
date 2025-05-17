import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CodeCheck from "./CodeCheck";

const EmailAsk = () => {
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
    const [code,setCode]=useState(0);
    const checkEmail_func=async(data)=>{
        try {
            const response=await axios.get(`http://localhost:8000/reset/password/${data.email}`);
            setCode(response.data.resetCode);
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
    code===0?<div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Reset Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(checkEmail_func)}>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="code"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email id here:"
              {...register("email",{required:"This is required"})}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p> }
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            {isSubmitting?"Submitting Email":"Submit Email"}
          </button>
        </form>
      </div>
    </div>:<CodeCheck resetCode={code}/>
  );
};

export default EmailAsk;
