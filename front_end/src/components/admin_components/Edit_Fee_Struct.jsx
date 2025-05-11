import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import NoAccess from "../NoAccess";
import axios from "axios";

const Edit_Fee_Struct = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const updateFeeFunc = async (data) => {
    try {
      console.log(data)
      if (window.confirm("Are you sure you want to perform this action?")) {
        const response = await axios.patch(
          `http://localhost:8000/fetch/class/edit/fee/${location.state?.structFee.class_name}`,data,{withCredentials:true}
        );
        alert(response.data);
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
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      Fee Structure of class {location.state.structFee.class_name}
      <form onSubmit={handleSubmit(updateFeeFunc)} className="space-y-5">
        <div>
          <label
            for="admission_fee"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Admission Fee
          </label>
          <input
            type="number"
            id="admission_fee"
            name="admission_fee"
            defaultValue={location.state.structFee.admission_fee}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("admission_fee", {
              required: "This cannot be left empty",
              min: { value: 0, message: "Please enter a valid number" },
            })}
          />
        </div>

        <div>
          <label
            for="monthly"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Monthly Fee
          </label>
          <input
            type="number"
            id="monthly_fee"
            name="monthly_fee"
            defaultValue={location.state.structFee.monthly_fee}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("monthly_fee", {
              required: "This cannot be left empty",
              min: { value: 0, message: "Please enter a valid number" },
            })}
          />
        </div>

        <div>
          <label
            for="comp"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Computer Fee
          </label>
          <input
            type="number"
            id="comp_fee"
            name="comp_fee"
            defaultValue={location.state.structFee.comp_fee}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("comp_fee", {
              required: "This cannot be left empty",
              min: { value: 0, message: "Please enter a valid number" },
            })}
          />
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Update Fees
          </button>
        </div>
      </form>
    </div>
  ) : (
    <NoAccess />
  );
};

export default Edit_Fee_Struct;
