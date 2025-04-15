import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import {Button} from "@material-tailwind/react"
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="z-10 mt-17 bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3JtNjIxLWJhY2tncm91bmQtMDMwYi5qcGc.jpg')] min-h-screen">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<About/>} />
            <Route exact path="/login-form" element={<LoginForm/>}/>
            
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
