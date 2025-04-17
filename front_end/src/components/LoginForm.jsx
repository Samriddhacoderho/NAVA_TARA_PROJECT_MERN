import React from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import NoAccess from "./NoAccess";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {register,handleSubmit,watch,formState:{errors,isSubmitting}}=useForm()
  const teacherLoggedIn=document.cookie.includes("teacherToken")
  const adminLoggedIn=document.cookie.includes("adminToken")
  const studentLoggedIn=document.cookie.includes("studentToken")

  const navigate=useNavigate();
  const formBackendFunc=async(data)=>
  {
    console.log(data)
    try {
      const response=await axios.post("http://localhost:8000/login",data,{withCredentials:true});
      alert(response.data)
      navigate("/")
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
    (!teacherLoggedIn && !adminLoggedIn && !studentLoggedIn)?<div>
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-lg w-full">
      <img
        className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        src="https://ei.study/wp-content/uploads/elementor/thumbs/4-1-qdcrno8zblz2tck9z8mvv0xz6in0c23ze9u49ht9gw.jpg"
        alt="Login Page"
      />
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <div className="min-h-screen flex items-start justify-center pt-32">
      <div className="bg-gray-200 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-200">
        <form onSubmit={handleSubmit(formBackendFunc)}>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Navatara English School</h2>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
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
          >
            Login
          </button>
        </form>
      </div>
    </div>
      </div>
    </div>
  </div>:<NoAccess/>
  );
};

export default LoginForm;
