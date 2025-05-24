import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import ReceiptPDF from "./ReceiptPDF";
import { contextCreate } from "../../../Context";

const ViewFee = () => {
  const navigate=useNavigate();
  const {mode,setMode}=useContext(contextCreate)
  const location = useLocation();
  const [record, setRecord] = useState([]);
  const months = [
    "Baishakh",
    "Jestha",
    "Asadhh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];
  const [payed, setPayed] = useState(0);
  const [due,setDue]=useState(0);
  const [PDF,setPDF]=useState(false);
  const [pdfdata,setpdfdata]=useState({})

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/getFee/${location.state?.student._id}`,
          { withCredentials: true }
        );
        const amountResponse=await axios.get(`http://localhost:8000/fetch/class/structure/fees/${location.state?.student.class_name}`,{withCredentials:true})
        setRecord(response.data);
        let total = 0;
        months.map((month) => {
          total =
            total +
            response.data[0].records[month].adm_fee +
            response.data[0].records[month].month_fee +
            response.data[0].records[month].comp_fee;
        });
        setPayed(total);
        setDue(amountResponse.data.total-total);
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    };

    fetchRecord();
  }, []);

  const handleAmountFunc=async(month)=>{
    try {
      navigate("/edit-student-fee-record",{state:{month:month,id:location.state?.student._id}});
    } catch (error) {
      if(error.response)
      {
        alert(error.response.data)
      }
      else
      {
        alert(error.message);
      }
    }
  }
  return location.state ? (
    <div className={`min-h-screen py-10 px-4 ${
    mode === 'light'
      ? 'bg-gradient-to-br from-blue-50 to-indigo-100'
      : 'bg-gradient-to-br from-gray-900 to-blue-900'
  }`}>
      {!PDF && (
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Student Information Card */}
            <div className={`${
              mode === 'light'
                ? 'bg-white shadow-lg border border-blue-100'
                : 'bg-gray-800 shadow-xl border border-gray-700'
            } rounded-2xl overflow-hidden`}>
              <div className={`${
                mode === 'light'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700'
              } p-6`}>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Student Information
                </h2>
              </div>
              
              <div className="p-6 space-y-4">
                {/* Student Details */}
                <div className={`space-y-4 ${
                  mode === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {[
                    { label: 'Full Name', value: location.state.student.name },
                    { label: 'Class', value: location.state.student.class_name },
                    { label: 'Address', value: location.state.student.address },
                    { label: "Father's Name", value: location.state.student.father_name },
                    { label: "Father's Phone", value: location.state.student.father_phone },
                    { label: "Mother's Name", value: location.state.student.mother_name },
                    { label: "Mother's Phone", value: location.state.student.mother_phone }
                  ].map((item, index) => (
                    <div key={index} className={`${
                      mode === 'light'
                        ? 'bg-blue-50 hover:bg-blue-100'
                        : 'bg-gray-700/50 hover:bg-gray-700'
                    } p-4 rounded-xl transition-colors duration-200`}>
                      <span className="text-sm font-medium">{item.label}:</span>
                      <p className={`text-lg font-semibold mt-1 ${
                        mode === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Records Card */}
            <div className={`${
              mode === 'light'
                ? 'bg-white shadow-lg border border-red-100'
                : 'bg-gray-800 shadow-xl border border-gray-700'
            } rounded-2xl overflow-hidden`}>
              <div className={`${
                mode === 'light'
                  ? 'bg-gradient-to-r from-red-500 to-pink-600'
                  : 'bg-gradient-to-r from-red-600 to-pink-700'
              } p-6`}>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Payment Records
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Monthly Records */}
                <div className="grid gap-4">
                  {months.map((month) =>
                    record.map((rec) => {
                      const totalMonth =
                        rec.records[month].adm_fee +
                        rec.records[month].month_fee +
                        rec.records[month].comp_fee;
                      return (
                        <div key={month} className={`${
                          mode === 'light'
                            ? 'bg-gray-50 border border-gray-200'
                            : 'bg-gray-700/50 border border-gray-600'
                        } rounded-xl p-4 flex flex-wrap gap-4 items-center justify-between transition-all hover:shadow-md`}>
                          <div className="space-y-1">
                            <div className={`text-sm font-medium ${
                              mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                              {month}
                            </div>
                            <div className={`text-lg font-semibold ${
                              mode === 'light' ? 'text-gray-900' : 'text-white'
                            }`}>
                              {totalMonth > 0 ? `Rs. ${totalMonth}` : 'XXX'}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAmountFunc(month)}
                              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                mode === 'light'
                                  ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                  : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                              }`}
                            >
                              {totalMonth > 0 ? 'Edit' : 'Add'}
                            </button>
                            
                            {totalMonth > 0 && (
                              <button
                                onClick={() => {
                                  setPDF(true);
                                  setpdfdata({
                                    month,
                                    adm_fee: rec.records[month].adm_fee,
                                    month_fee: rec.records[month].month_fee,
                                    comp_fee: rec.records[month].comp_fee,
                                    total: totalMonth
                                  });
                                }}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                  mode === 'light'
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                }`}
                              >
                                Download Receipt
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Summary Section */}
                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className={`p-4 rounded-xl ${
                    mode === 'light'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-red-500/10 text-red-400'
                  }`}>
                    <div className="text-sm">Amount Due</div>
                    <div className="text-lg font-bold">Rs. {due}</div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${
                    mode === 'light'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-green-500/10 text-green-400'
                  }`}>
                    <div className="text-sm">Amount Paid</div>
                    <div className="text-lg font-bold">Rs. {payed}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 flex justify-center">
            <Link to="/fetch-students">
              <button className={`px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                mode === 'light'
                  ? 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-800 text-white shadow-xl hover:shadow-2xl'
              }`}>
                ← Back to Students
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* PDF Viewer Section */}
      {PDF && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          <PDFViewer style={{width:"100%", height:"90vh"}} className="rounded-lg shadow-2xl">
            <ReceiptPDF studentData={location.state.student} pdfdata={pdfdata} />
          </PDFViewer>
          <button
            onClick={() => {setPDF(false); setpdfdata({})}}
            className={`mt-4 px-6 py-3 rounded-xl font-medium transition-all ${
              mode === 'light'
                ? 'bg-white text-gray-700 hover:bg-gray-50'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Close Preview
          </button>
        </div>
      )}
    </div>
  ) : (
    <NoAccess />
  );
};

export default ViewFee;
