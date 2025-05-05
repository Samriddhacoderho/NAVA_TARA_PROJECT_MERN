import React from 'react'
import NoAccess from '../NoAccess';
import { useForm } from 'react-hook-form';

const CreateAccount = () => {
    const adminLoggedIn=document.cookie.includes("adminToken");
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
  return (
    adminLoggedIn?<div>
      <div className="h-screen flex items-center justify-center">
        <div className="min-h-screen flex items-start justify-center pt-32">
      <div className="bg-gray-200 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-200">
        <form onSubmit={handleSubmit()}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Navatara English School</h2>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select User:
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your valid email here:"
              {...register("email",{
                required:"This cannot be left empty"
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p> }
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your valid password here:"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("password",{
                required:"This cannot be left empty",
                minLength:{value:8,message:"Password must be atleast 8 characters"},
                maxLength:{value:30,message:"Password is too long, max 30 characters accepted"}
              })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p> }
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={isSubmitting}
          >
            {isSubmitting?"Logging In":"Log In"}
          </button>
        </form>
      </div>
    </div>
      </div>
    </div>:<NoAccess/>
  )
}

export default CreateAccount
