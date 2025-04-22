import React, { useState } from "react";
import NoAccess from "../NoAccess";
import { useForm } from "react-hook-form";
import StepperInNoticeForm from "./StepperInNoticeForm";
import axios from "axios"


const CreateNotice = () => {
  const adminLoggedIn = document.cookie.includes("adminToken");
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();
  const noticeHandle = async (data) => {
    try {
      const filedata=new FormData();
      filedata.append("noticecategory",data.noticecategory);
      filedata.append("targetaudience",data.targetaudience);
      filedata.append("noticetitle",data.noticetitle);
      filedata.append("noticedes",data.noticedes);
      filedata.append("attachments",data.attachments[0]);
      const response=await axios.post("http://localhost:8000/admin/create-notice",filedata,{
        headers:{

        },
        withCredentials:true
      })
      alert(response.data.alertMsg)
      // const date=response.data.dateOF.slice(0,(response.data.dateOF.indexOf("T")))
      // console.log(date)
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
  };
  const nextFunc = async () => {
    const output = await trigger();
    if (output) {
      setStep(step + 1);
    }
  };
  return adminLoggedIn ? (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <div className="min-h-screen flex items-start justify-center pt-32">
          <div className="bg-gray-200 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-200">
            <StepperInNoticeForm stepCount={step} />
            <form onSubmit={handleSubmit(noticeHandle)}>
              <h2 className="text-2xl font-bold mb-6 mt-3 text-gray-800 text-center">
                Create Notice:Step {step}
              </h2>
              {step === 1 && (
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="noticecategory"
                      className="inline mb-2 mx-2 text-sm font-medium text-gray-900"
                    >
                      Notice Category:
                    </label>
                    <select
                      id="noticecategory"
                      className="border-2 border-solid"
                      {...register("noticecategory", {
                        required: "You must choose one category!",
                      })}
                    >
                      <option value="">Choose one Category</option>
                      <option value="General">General</option>
                      <option value="Severe">Severe</option>
                      <option value="Events & Holidays">
                        Events & Holidays
                      </option>
                      <option value="Academic">Academic</option>
                      <option value="Meeting">Meeting</option>
                    </select>
                    {errors.noticecategory && (
                      <p className="text-red-500">
                        {errors.noticecategory.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="targetaudience"
                      className="inline mb-2 mx-2 text-sm font-medium text-gray-900"
                    >
                      Target Audience:
                    </label>
                    <select
                      id="targetaudience"
                      className="border-2 border-solid"
                      {...register("targetaudience", {
                        required: "You must choose one audience!",
                      })}
                    >
                      <option value="">Choose one audience</option>
                      <option value="All">All</option>
                      <option value="Teachers & Staffs">
                        Teachers & Staffs
                      </option>
                      <option value="Students">Students</option>
                    </select>
                    {errors.targetaudience && (
                      <p className="text-red-500">
                        {errors.targetaudience.message}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="noticetitle"
                      className="block mb-2 mx-2 text-sm font-medium text-gray-900"
                    >
                      Notice Title:
                    </label>
                    <input
                      type="text"
                      id="noticetitle"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your notice title here:"
                      {...register("noticetitle", {
                        required: "This cannot be left empty!",
                      })}
                    />
                    {errors.noticetitle && (
                      <p className="text-red-500">
                        {errors.noticetitle.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="noticedes"
                      className="block mb-2 mx-2 text-sm font-medium text-gray-900"
                    >
                      Notice Description:
                    </label>
                    <textarea
                      name="noticedes"
                      id="noticedes"
                      {...register("noticedes", {
                        required: "This cannot be left empty!",
                      })}
                      placeholder="Enter your notice description here:"
                      className="border border-gray-400 bg-white text-black p-2 rounded w-full"
                    ></textarea>
                    {errors.noticedes && <p className="text-red-500">{errors.noticedes.message}</p> }
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="attachments"
                      className="block mb-2 mx-2 text-sm font-medium text-gray-900"
                    >
                      Add Attachments:
                    </label>
                    <input
                      type="file"
                      id="attachments"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your notice title here:"
                      {...register("attachments")}
                    />
                  </div>
                  <div className="mb-5">
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={nextFunc}
                  >
                    Next
                  </button>
                </div>
              )}
              {step > 1 && step < 3 && (
                <div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={nextFunc}
                  >
                    Next
                  </button>
                </div>
              )}
              {step == 3 && (
                <div>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Posting" : "Post Notice"}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NoAccess></NoAccess>
  );
};

export default CreateNotice;
