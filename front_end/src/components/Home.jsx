import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextCreate } from "../Context";

const Home = () => {
  const teacherLoggedIn = document.cookie.includes("teacherToken");
  const adminLoggedIn = document.cookie.includes("adminToken");
  const studentLoggedIn = document.cookie.includes("studentToken");
  const contextUse = useContext(contextCreate);
  
  const isLoggedIn = teacherLoggedIn || adminLoggedIn || studentLoggedIn;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-8 sm:py-16">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/20">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 sm:w-24 h-20 sm:h-24 mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <img src="/school_logo.png" alt="" className="w-16 sm:w-20" />
          </div>
          
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-center leading-tight">
            Welcome to Nawatara English School
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-10 max-w-2xl">
            Empowering minds and shaping futures through quality education and holistic development.
          </p>

          {!isLoggedIn && (
            <Link to={"/login-form"} className="mt-4 w-full sm:w-auto">
              <button className="cursor-pointer group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-md"></span>
                <span className="relative flex items-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <div className="mt-6 w-full sm:w-auto">
              <div className="relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-100 shadow-md">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                <p className="text-xl text-indigo-800 font-medium flex items-center justify-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Welcome back, <span className="font-bold ml-1">{contextUse.name}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence in Education</h3>
          <p className="text-gray-600 text-center">Providing outstanding academic programs since 1995</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced Faculty</h3>
          <p className="text-gray-600 text-center">Learn from our team of dedicated educators</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Facilities</h3>
          <p className="text-gray-600 text-center">State-of-the-art infrastructure and learning spaces</p>
        </div>
      </div>
    </div>
  );
};

export default Home;