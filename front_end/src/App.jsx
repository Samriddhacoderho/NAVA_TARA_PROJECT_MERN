import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import LoginForm from "./components/LoginForm";
import Context from "./Context";
import CreateNotice from "./components/admin_components/CreateNotice";
import Notice from "./components/Notice";
import RoutineSee from "./components/teachers_components/RoutineSee";
import RoutineEdit from "./components/admin_components/RoutineEdit";
import CreateAccountTeacher from "./components/admin_components/CreateAccountTeacher";
import CreateAccountStudent from "./components/admin_components/CreateAccountStudent";
import FetchStudents from "./components/students_data/FetchStudents";
import EditStudentData from "./components/students_data/EditStudentData";
import ViewFee from "./components/students_data/ViewFee";

const App = () => {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Navbar />
          <main className="z-10 mt-20 bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3JtNjIxLWJhY2tncm91bmQtMDMwYi5qcGc.jpg')] min-h-screen">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<About />} />
              <Route exact path="/login-form" element={<LoginForm />} />
              <Route exact path="/create-notice" element={<CreateNotice />} />
              <Route exact path="/notice" element={<Notice />} />
              <Route exact path="/routine" element={<RoutineSee />} />
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
              <Route exact path="/view-fee" element={<ViewFee/>} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default App;
