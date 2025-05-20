import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";


const TeacherPayrollEdit = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchOldRecord = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/getSalary/${props.teacherRecord[0].teacherID}`,
          { withCredentials: true }
        );
        setRecord(response.data);
        setValue("salary", response.data[0].records[props.month].salary);
        setValue("allowance", response.data[0].records[props.month].allowance);
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
            [props.month]: {
              ...record[0].records[props.month],
              salary: data.salary,
              allowance: data.allowance,
            },
          },
        };
        setRecord([updatedRecord]);
        const response = await axios.patch(
          `http://localhost:8000/editSalary/${props.teacherRecord[0].teacherID}`,
          updatedRecord,
          { withCredentials: true }
        );

        alert(response.data);
        window.location.reload();
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
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit(updateRecord)} className="space-y-5">
        <div>
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("salary", {})}
          />
          {errors.salary && (
            <p className="text-red-500">{errors.salary.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="allowance"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Allowance
          </label>
          <input
            type="number"
            id="allowance"
            name="allowance"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("allowance", {})}
          />
          {errors.allowance && (
            <p className="text-red-500">{errors.allowance.message}</p>
          )}
        </div>

        <div className="options flex justify-between">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Update Record
          </button>
          <button
            type="button"
            onClick={() => props.setshowEdit(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherPayrollEdit;
