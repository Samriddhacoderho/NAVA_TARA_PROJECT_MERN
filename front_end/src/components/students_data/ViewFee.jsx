import React from "react";
import { Link, useLocation } from "react-router-dom";
import NoAccess from "../NoAccess";

const ViewFee = () => {
    const location=useLocation();
  return (
    location.state?<div className="max-w-7xl bg-gradient-to-r from-blue-100 to-purple-200 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            🎓 Student Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Full Name: <strong>{location.state.student.name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Class: <strong>{location.state.student.class_name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Address: <strong>{location.state.student.address}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Father's Name: <strong>{location.state.student.father_name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Father's Phone: <strong>{location.state.student.father_phone}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Mother's Name: <strong>{location.state.student.mother_name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
               Mother's Phone: <strong>{location.state.student.mother_phone}</strong>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border border-red-300">
          <h2 className="text-2xl font-semibold text-red-800 mb-6">
            📋 Payment Records
          </h2>
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Baishak: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Jestha: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Asadhh: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Shrawan: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Bhadra: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Ashwin: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Kartik: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Mangsir: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Poush: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Magh: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Falgun: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                <span>
                  📅 Chaitra: <strong>RS XXX</strong>
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                  Add
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="p-3 bg-red-100 text-red-800 font-semibold rounded-lg shadow-sm">
                💸 Amount Left: RS XXXX (NEED TO BE PAID)
              </div>
              <div className="p-3 bg-green-100 text-green-800 font-semibold rounded-lg shadow-sm">
                ✅ Amount Paid: RS XXXX (PAID SO FAR)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-5">
        <Link to={"/fetch-students"}>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Back
          </span>
        </button>
        </Link>
      </div>
    </div>:<NoAccess/>
  );
};

export default ViewFee;
