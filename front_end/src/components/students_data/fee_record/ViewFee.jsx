import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoAccess from "../../NoAccess";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import ReceiptPDF from "./ReceiptPDF";

const ViewFee = () => {
  const navigate=useNavigate();
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
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 py-10 px-4">
      {!PDF && <div>
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
              Father's Name:{" "}
              <strong>{location.state.student.father_name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
              Father's Phone:{" "}
              <strong>{location.state.student.father_phone}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
              Mother's Name:{" "}
              <strong>{location.state.student.mother_name}</strong>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
              Mother's Phone:{" "}
              <strong>{location.state.student.mother_phone}</strong>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border border-red-300 w-140">
          <h2 className="text-2xl font-semibold text-red-800 mb-6">
            📋 Payment Records
          </h2>
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              {months.map((month) =>
                record.map((rec) => {
                  const totalMonth =
                    rec.records[month].adm_fee +
                    rec.records[month].month_fee +
                    rec.records[month].comp_fee;
                  return (
                    <div
                      key={month}
                      className="w-full flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm"
                    >
                      <span>
                        📅 {month}:{" "}
                        <strong>
                          {totalMonth > 0 ? "Rs." + totalMonth : "XXX"}
                        </strong>
                      </span>
                      <div className="flex gap-2">
                        <button onClick={()=>handleAmountFunc(month)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded shadow">
                          {totalMonth>0?"Edit":"Add"}
                        </button>
                        {totalMonth > 0 && (
                          <button onClick={()=>{setPDF(true),setpdfdata({month:month,adm_fee:rec.records[month].adm_fee,month_fee:rec.records[month].month_fee,comp_fee:rec.records[month].comp_fee,total:totalMonth})}}className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow">
                            Download Receipt
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-6 space-y-2">
              <div className="p-3 bg-red-100 text-red-800 font-semibold rounded-lg shadow-sm">
                💸 Amount Left: RS {due} (NEED TO BE PAID)
              </div>
              <div className="p-3 bg-green-100 text-green-800 font-semibold rounded-lg shadow-sm">
                ✅ Amount Paid: RS {payed} (PAID SO FAR)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link to={"/fetch-students"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Back
            </span>
          </button>
        </Link>
      </div>
      </div>}
      {PDF && <div><PDFViewer style={{width:"100%",height:"100vh"}}><ReceiptPDF studentData={location.state.student} pdfdata={pdfdata} /></PDFViewer> <button onClick={()=>{setPDF(false),setpdfdata({})}}>Go Back</button></div>}
    </div>
  ) : (
    <NoAccess />
  );
};

export default ViewFee;
