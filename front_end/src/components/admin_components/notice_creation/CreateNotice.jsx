import React, { useContext, useState } from "react";
import NoAccess from "../../NoAccess";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import StepperInNoticeForm from "./StepperInNoticeForm";
import { contextCreate } from "../../../Context";


const CreateNotice = () => {
  const {mode,setMode,userType}=useContext(contextCreate);
  const [step, setStep] = useState(1);
  const [selectedFileName, setSelectedFileName] = useState("");
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate=useNavigate();
  const noticeHandle = async (data) => {
    try {
      const filedata=new FormData();
      filedata.append("noticecategory",data.noticecategory);
      filedata.append("targetaudience",data.targetaudience);
      filedata.append("noticetitle",data.noticetitle);
      filedata.append("noticedes",data.noticedes);
      filedata.append("attachments",data.attachments[0]);
      const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/create-notice`,filedata,{
        headers:{

        },
        withCredentials:true
      })
      alert(response.data.alertMsg)
      navigate("/notice")
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
  return userType==="admin" ? (
    <div className={`min-h-screen ${
      mode === 'light'
        ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950'
    } py-12 px-4 sm:px-6`}>
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className={`text-4xl font-bold sm:text-5xl ${
          mode === 'light' ? 'text-gray-900' : 'text-white'
        } bg-clip-text`}>
          Create New Notice
        </h1>
        <p className={`mt-4 text-lg ${
          mode === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          Share important updates with your school community
        </p>
      </div>

      {/* Main Form Card */}
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-2xl shadow-xl overflow-hidden ${
          mode === 'light'
            ? 'bg-white border border-gray-100'
            : 'bg-gray-800 border border-gray-700'
        }`}>
          {/* Progress Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <div className="max-w-md mx-auto">
              <StepperInNoticeForm stepCount={step} />
              <p className="text-center mt-4 text-blue-100">
                Step {step} of 3: {step === 1 ? 'Basic Info' : step === 2 ? 'Notice Content' : 'Attachments'}
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(noticeHandle)} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Notice Category */}
                    <div className="space-y-2">
                      <label className={`block text-sm font-medium ${
                        mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                      }`}>
                        Notice Category
                      </label>
                      <select
                        {...register("noticecategory", {
                          required: "You must choose one category!",
                        })}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                          mode === 'light'
                            ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        }`}
                      >
                        <option value="">Select category...</option>
                        <option value="General">General</option>
                        <option value="Severe" className={mode === 'light' ? 'text-red-600' : 'text-red-400'}>Severe</option>
                        <option value="Events & Holidays">Events & Holidays</option>
                        <option value="Academic">Academic</option>
                        <option value="Meeting">Meeting</option>
                      </select>
                      {errors.noticecategory && (
                        <p className="text-red-500 text-sm mt-1">{errors.noticecategory.message}</p>
                      )}
                    </div>

                    {/* Target Audience */}
                    <div className="space-y-2">
                      <label className={`block text-sm font-medium ${
                        mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                      }`}>
                        Target Audience
                      </label>
                      <select
                        {...register("targetaudience", {
                          required: "You must choose one audience!",
                        })}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                          mode === 'light'
                            ? 'border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            : 'border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        }`}
                      >
                        <option value="">Select audience...</option>
                        <option value="All">All</option>
                        <option value="Teachers & Staffs">Teachers & Staff</option>
                        <option value="Students">Students</option>
                      </select>
                      {errors.targetaudience && (
                        <p className="text-red-500 text-sm mt-1">{errors.targetaudience.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  {/* Notice Title */}
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${
                      mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                    }`}>
                      Notice Title
                    </label>
                    <input
                      type="text"
                      {...register("noticetitle", {
                        required: "This cannot be left empty!",
                      })}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        mode === 'light'
                          ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          : 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder="Enter notice title..."
                    />
                    {errors.noticetitle && (
                      <p className="text-red-500 text-sm mt-1">{errors.noticetitle.message}</p>
                    )}
                  </div>

                  {/* Notice Description */}
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${
                      mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                    }`}>
                      Notice Description
                    </label>
                    <textarea
                      {...register("noticedes", {
                        required: "This cannot be left empty!",
                      })}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                        mode === 'light'
                          ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          : 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder="Enter notice description..."
                    ></textarea>
                    {errors.noticedes && (
                      <p className="text-red-500 text-sm mt-1">{errors.noticedes.message}</p>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="group">
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                    }`}>
                      Upload Attachments
                    </label>
                    <div className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl transition-colors duration-200 ${
                      mode === 'light'
                        ? 'border-gray-300 hover:border-blue-500 bg-gray-50'
                        : 'border-gray-600 hover:border-blue-400 bg-gray-700'
                    }`}>
                      <div className="space-y-2 text-center">
                        <svg className={`mx-auto h-12 w-12 ${
                          mode === 'light' ? 'text-gray-400' : 'text-gray-500'
                        }`} stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className={`flex text-sm justify-center ${
                          mode === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          <label className={`relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 ${
                            mode === 'light'
                              ? 'text-blue-600 hover:text-blue-500'
                              : 'text-blue-400 hover:text-blue-300'
                          }`}>
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              {...register("attachments")}
                              onChange={(e) => {
                                register("attachments").onChange(e);
                                setSelectedFileName(e.target.files[0]?.name || "");
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        {selectedFileName ? (
                          <div className={`mt-2 text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-2 ${
                            mode === 'light'
                              ? 'text-gray-600 bg-white'
                              : 'text-gray-300 bg-gray-600'
                          }`}>
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="truncate max-w-xs">{selectedFileName}</span>
                          </div>
                        ) : (
                          <p className={`text-xs ${
                            mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                          }`}>PDF, DOC up to 10MB</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                        mode === 'light'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Posting...
                        </>
                      ) : (
                        'Post Notice'
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              {step === 1 && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextFunc}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all duration-200"
                  >
                    Next Step
                  </button>
                </div>
              )}

              {step > 1 && step < 3 && (
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      mode === 'light'
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextFunc}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all duration-200"
                  >
                    Next Step
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NoAccess />
  );
};

export default CreateNotice;
