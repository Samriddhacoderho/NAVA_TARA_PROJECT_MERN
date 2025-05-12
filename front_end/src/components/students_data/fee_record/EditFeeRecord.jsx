import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditFeeRecord = () => {
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
          `http://localhost:8000/getFee/${location.state?.id}`,
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
          `http://localhost:8000/editFee/${location.state.id}`,
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
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit(updateRecord)} className="space-y-5">
        <div>
          <label
            htmlFor="adm_fee"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Admission Fee
          </label>
          <input
            type="number"
            id="adm_fee"
            name="adm_fee"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("adm_fee", {
            })}
          />
          {errors.adm_fee && (
            <p className="text-red-500">{errors.adm_fee.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="month_fee"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Monthly Fee
          </label>
          <input
            type="number"
            id="month_fee"
            name="month_fee"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("month_fee", {
            })}
          />
          {errors.month_fee && (
            <p className="text-red-500">{errors.month_fee.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="comp_fee"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Computer Fee
          </label>
          <input
            type="number"
            id="comp_fee"
            name="comp_fee"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("comp_fee", {
            })}
          />
          {errors.comp_fee && (
            <p className="text-red-500">{errors.comp_fee.message}</p>
          )}
        </div>

        <div className="options flex justify-between">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Update Record
          </button>
          <Link to={"/fetch-students"}>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  ) : (
    <NoAccess />
  );
};

export default EditFeeRecord;
