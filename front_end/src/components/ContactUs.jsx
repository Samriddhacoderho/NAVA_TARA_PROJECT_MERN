import React, { useContext } from 'react'
import { contextCreate } from '../Context';

const ContactUs = () => {
    const contextUse = useContext(contextCreate);
    const {mode, setMode} = contextUse;
    
    return (
      <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        mode === 'light' 
          ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100' 
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
              mode === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">Touch</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              mode === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Address Card */}
              <div className={`${
                mode === 'light' 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm'
              } rounded-2xl p-6 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300`}>
                <div className="inline-block p-3 bg-indigo-100 rounded-2xl mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600">123 School Street, Kathmandu, Nepal</p>
              </div>

              {/* Email Card */}
              <div className={`${
                mode === 'light' 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm'
              } rounded-2xl p-6 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300`}>
                <div className="inline-block p-3 bg-teal-100 rounded-2xl mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@nawataraschool.edu.np</p>
              </div>

              {/* Phone Card */}
              <div className={`${
                mode === 'light' 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm'
              } rounded-2xl p-6 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300`}>
                <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+977 01-4123456</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 rounded-2xl p-8 shadow-xl border ${
              mode === 'light' 
                ? 'bg-white border-gray-200' 
                : 'bg-white/80 backdrop-blur-sm border-white/50'
            }`}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'light' ? 'text-gray-700' : 'text-gray-800'
                    }`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        mode === 'light' 
                          ? 'bg-gray-50 border-gray-200' 
                          : 'bg-white/50 border-gray-200'
                      }`}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'light' ? 'text-gray-700' : 'text-gray-800'
                    }`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                        mode === 'light' 
                          ? 'bg-gray-50 border-gray-200' 
                          : 'bg-white/50 border-gray-200'
                      }`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    mode === 'light' ? 'text-gray-700' : 'text-gray-800'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                      mode === 'light' 
                        ? 'bg-gray-50 border-gray-200' 
                        : 'bg-white/50 border-gray-200'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    mode === 'light' ? 'text-gray-700' : 'text-gray-800'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors bg-white/50 resize-none ${
                      mode === 'light' 
                        ? 'bg-gray-50 border-gray-200' 
                        : 'bg-white/50 border-gray-200'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full px-6 py-4 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                      mode === 'light'
                        ? 'bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600'
                        : 'bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700'
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className={`rounded-2xl p-2 shadow-xl overflow-hidden ${
              mode === 'light' 
                ? 'bg-white border-gray-200' 
                : 'bg-white/80 backdrop-blur-sm border-white/50'
            }`}>
              <iframe
                title="school-location"
                className="w-full h-[400px] rounded-xl"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Biratnagar+(School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs
