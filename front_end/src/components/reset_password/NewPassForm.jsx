import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPassForm = (props) => {
    const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPass, setshowPass] = useState(false);
  const passHandleFunc = () => {
    if (showPass) {
      setshowPass(false);
    } else {
      setshowPass(true);
    }
  };

  const checkPass_func = async (data) => {
    try {
      const response=await axios.patch(`http://localhost:8000/reset/password/${props.email}?role=${props.role}`,data);
      alert(response.data);
      navigate("/login-form")
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Reset Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(checkPass_func)}>
          <div className="mb-5">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="newPass"
            >
              New Password
            </label>
            <div className="flex flex-row">
              <input
                id="newPass"
                type={showPass ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your new password here:"
                {...register("newPass", { required: "This is required" })}
              />
            </div>
            {errors.newPass && (
              <p className="text-red-500">{errors.newPass.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="confirmPass"
            >
              Confirm New Password
            </label>
            <div className="flex flex-row">
              <input
                id="confirmPass"
                type={showPass ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your new password here:"
                {...register("confirmPass", { required: "This is required" ,
                    validate:(value)=>value===watch("newPass") || "Passwords do not match with each other"
                })}
              />
              {!showPass && (
                <FontAwesomeIcon
                  onClick={passHandleFunc}
                  className="mt-3 ml-3 cursor-pointer"
                  icon={faEye}
                />
              )}
              {showPass && (
                <FontAwesomeIcon
                  onClick={passHandleFunc}
                  className="mt-3 ml-3 cursor-pointer"
                  icon={faEyeSlash}
                />
              )}
            </div>
            {errors.confirmPass && (
              <p className="text-red-500">{errors.confirmPass.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            {isSubmitting ? "Updating Password" : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassForm;
