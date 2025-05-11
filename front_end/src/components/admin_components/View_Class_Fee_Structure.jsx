import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"

const View_Class_Fee_Structure = () => {
  const navigate=useNavigate();
  const [showStructform, setshowStructform] = useState(false);
  const [structFee,setstructFee]=useState({});
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
          `http://localhost:8000/fetch/class/structure/fees/${data.class_name}`,
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
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Class Fee Structure
      </h2>

      <form
        onSubmit={handleSubmit(fetchClass_Stucture_Fees)}
        className="space-y-5"
      >
        <div>
          <label
            htmlFor="class_name"
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
              disabled={isSubmitting}
            >
              {showStructform ? "Hide Fee Structure" : "Show Fee Structure"}
            </button>
          </div>
        </div>
      </form>

      {showStructform && (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Fee Structure
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <span className="text-gray-600 font-medium">Admission Fee</span>
              <span className="text-gray-900 font-semibold">Rs.{structFee.admission_fee}</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <span className="text-gray-600 font-medium">Monthly Fee</span>
              <span className="text-gray-900 font-semibold">Rs.{structFee.monthly_fee}</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <span className="text-gray-600 font-medium">Computer Fee</span>
              <span className="text-gray-900 font-semibold">Rs.{structFee.comp_fee}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <span className="text-gray-600 font-medium">Total Fee</span>
              <span className="text-gray-900 font-semibold">Rs.{structFee.total}</span>
            </div>
          </div>
          <button onClick={handleEdit} className="cursor-pointer w-full bg-black hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">Edit Fee Structure</button>
        </div>
      )}
    </div>
  );
};

export default View_Class_Fee_Structure;
