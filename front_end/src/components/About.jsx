import React, { useContext } from "react";
import { contextCreate } from "../Context";

const About = () => {
  const {mode, setMode} = useContext(contextCreate);
  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative ${
      mode === 'light' 
        ? 'bg-gray-50'
        : 'bg-gray-900'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${
          mode === 'light'
            ? 'bg-[radial-gradient(#3b82f620_1px,transparent_1px)]'
            : 'bg-[radial-gradient(#6366f120_1px,transparent_1px)]'
        } [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)] opacity-40`}></div>
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl ${
          mode === 'light' ? 'bg-blue-50' : 'bg-blue-900/30'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl ${
          mode === 'light' ? 'bg-purple-50' : 'bg-purple-900/30'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 max-w-3xl">
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
            mode === 'light'
              ? 'bg-blue-50 text-blue-700'
              : 'bg-blue-900/50 text-blue-300'
          } mb-6 animate-fade-in`}>
            <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
              mode === 'light' ? 'bg-blue-500' : 'bg-blue-400'
            }`}></span>
            Established in 2070 BS (2013 AD)
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-5 animate-fade-in delay-100 ${
            mode === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            About Nawatara English School
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-6 animate-expand-width"></div>
          
          <p className={`text-lg animate-fade-in delay-200 ${
            mode === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            A decade of excellence in shaping the future of Nepal's next generation
          </p>
        </div>
        
        <div className={`flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden border transform transition-all hover:shadow-2xl duration-500 ${
          mode === 'light'
            ? 'bg-white border-gray-100'
            : 'bg-gray-800 border-gray-700'
        }`}>
          <div className="w-full md:w-1/2 relative overflow-hidden group">
            <img
              className="w-full h-80 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/AboutUs_FRONTEND.png"
              alt="Students learning with teacher"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="space-y-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-white/90">To provide quality education that nurtures creativity, critical thinking, and character development in a supportive environment.</p>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-2xl">10+</div>
                <div className="text-gray-700 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-40 h-40 rounded-full opacity-50 -translate-x-20 -translate-y-20 ${
              mode === 'light' ? 'bg-blue-50' : 'bg-blue-900/30'
            }`}></div>
            
            <div className="relative z-10">
              <div className={`inline-block px-3 py-1 text-sm font-medium rounded-md mb-6 animate-fade-in ${
                mode === 'light'
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-blue-900/50 text-blue-300'
              }`}>
                Our Story
              </div>
              
              <h2 className={`text-3xl font-bold mb-6 animate-fade-in delay-100 ${
                mode === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                A Decade of Educational Excellence
              </h2>
              
              <div className={`space-y-6 animate-fade-in delay-200 ${
                mode === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <p>
                  Founded in 2070 BS (2013 AD), Nawatara English School has established itself as a premier educational institution in Biratnagar, Nepal. We have grown into a thriving community of over 500 learners and 50 dedicated educators.
                </p>
                
                <p>
                  Our approach to education goes beyond textbooks. We believe in nurturing well-rounded individuals through a blend of academic excellence, character development, and extracurricular activities. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning.
                </p>
                
                <p>
                  At Nawatara, we take pride in our modern facilities, innovative teaching methodologies, and commitment to creating a supportive environment where every student can thrive. Our graduates consistently achieve outstanding results and go on to excel in higher education institutions across Nepal and abroad.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-4 animate-fade-in delay-300">
                <div className="flex items-start space-x-3 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    mode === 'light'
                      ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600'
                      : 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-700'
                  } group-hover:text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${
                      mode === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Quality Education</h3>
                    <p className={
                      mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }>Rigorous academic programs tailored to student needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    mode === 'light'
                      ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-600'
                      : 'bg-purple-900/50 text-purple-400 group-hover:bg-purple-700'
                  } group-hover:text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${
                      mode === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Expert Faculty</h3>
                    <p className={
                      mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }>Highly qualified and passionate educators</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    mode === 'light'
                      ? 'bg-pink-100 text-pink-600 group-hover:bg-pink-600'
                      : 'bg-pink-900/50 text-pink-400 group-hover:bg-pink-700'
                  } group-hover:text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${
                      mode === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Modern Facilities</h3>
                    <p className={
                      mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }>State-of-the-art infrastructure and learning resources</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    mode === 'light'
                      ? 'bg-green-100 text-green-600 group-hover:bg-green-600'
                      : 'bg-green-900/50 text-green-400 group-hover:bg-green-700'
                  } group-hover:text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${
                      mode === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Holistic Development</h3>
                    <p className={
                      mode === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }>Focus on academic, physical, and emotional growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Keep existing animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 24; }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-expand-width {
          width: 0;
          animation: expandWidth 1s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;