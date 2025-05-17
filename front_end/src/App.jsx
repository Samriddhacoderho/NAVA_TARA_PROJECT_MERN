import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import LoginForm from "./components/LoginForm";
import Context from "./Context";
import CreateNotice from "./components/admin_components/notice_creation/CreateNotice";
import Notice from "./components/notices/Notice";
import RoutineSee from "./components/teachers_components/routine_view/RoutineSee";
import RoutineEdit from "./components/admin_components/routine_edit/RoutineEdit";
import CreateAccountTeacher from "./components/admin_components/accounts_creation/CreateAccountTeacher";
import CreateAccountStudent from "./components/admin_components/accounts_creation/CreateAccountStudent";
import FetchStudents from "./components/students_data/students_profile_view/FetchStudents";
import EditStudentData from "./components/students_data/edit_profile/EditStudentData";
import ViewFee from "./components/students_data/fee_record/ViewFee";
import View_Class_Fee_Structure from "./components/admin_components/class_fee_structure/View_Class_Fee_Structure";
import Edit_Fee_Struct from "./components/admin_components/class_fee_structure/Edit_Fee_Struct";
import EditFeeRecord from "./components/students_data/fee_record/EditFeeRecord";
import TeacherPayroll from "./components/teachers_payroll/TeachersPayroll";

const App = () => {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Navbar />
          <main className="z-10 bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3JtNjIxLWJhY2tncm91bmQtMDMwYi5qcGc.jpg')] min-h-screen">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<About />} />
              <Route exact path="/login-form" element={<LoginForm />} />
              <Route exact path="/create-notice" element={<CreateNotice />} />
              <Route exact path="/notice" element={<Notice />} />
              <Route exact path="/routine" element={<RoutineSee/>} />
              <Route exact path="/routines" element={<RoutineEdit />} />
              <Route
                exact
                path="/create-account-teacher"
                element={<CreateAccountTeacher />}
              />
              <Route
                exact
                path="/create-account-student"
                element={<CreateAccountStudent />}
              />
              <Route exact path="/fetch-students" element={<FetchStudents />} />
              <Route exact path="/edit-details" element={<EditStudentData />} />
              <Route exact path="/view-fee" element={<ViewFee />} />
              <Route
                exact
                path="/update-class-structure"
                element={<View_Class_Fee_Structure />}
              />
              <Route
                exact
                path="/edit-fee-struct"
                element={<Edit_Fee_Struct/>}
              />
              <Route
                exact
                path="/edit-student-fee-record"
                element={<EditFeeRecord/>}
              />
               <Route
                exact
                path="/view-teachers-payroll"
                element={<TeacherPayroll/>}
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default App;
