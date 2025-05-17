import React from 'react'
import { useForm } from 'react-hook-form'

const CodeCheck = (props) => {
    const checkCode_func=async(data)=>{
        try {
            if(Number(data.code)===props.resetCode)
            {
                alert("Your OTP Code is correct");
            }
            else
            {
                alert("Your OTP Code is incorrect")
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Reset Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(checkCode_func)}>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="code"
            >
              Verification Code
            </label>
            <input
              id="code"
              type="number"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your 6-digit OTP here:"
              {...register("code",{required:"This is required"})}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p> }
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            {isSubmitting?"Checking Code":"Check Code"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CodeCheck
