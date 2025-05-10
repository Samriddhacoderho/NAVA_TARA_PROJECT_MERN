import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Change_Class_Fee_Structure = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const fetchClass_Stucture_Fees=async(data)=>{
    try {
        const response=axios.get(`http://localhost:8000/fetch/class/structure/fees/${data.class_name}`,{withCredentials:true})
        console.log(response.data);
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
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Class Fee Setup
      </h2>

      <form  onSubmit={handleSubmit(fetchClass_Stucture_Fees)} className="space-y-5">
        <div>
          <label
            for="class_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Class
          </label>
          <select
            id="class_name"
            name="class_name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("class_name", { required: "This is required" })}
          >
            <option value="">-- Select Class --</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
          </select>
          {errors.class_name && (
            <p className="text-red-500">{errors.class_name.message}</p>
          )}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Save Fees
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Change_Class_Fee_Structure;
