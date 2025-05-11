import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-1 bg-[radial-gradient(circle_at_50%_120%,purple-500/10,transparent_65%)] opacity-70" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent,gray-900/40,transparent)] blur-xl opacity-30" />
      </div>

      <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white backdrop-blur-sm">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10">
          <div className="md:flex md:justify-between md:items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="transform transition-all duration-500 hover:scale-105 hover:rotate-2">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/school_logo.png"
                    className="h-24 w-auto drop-shadow-2xl filter contrast-125 relative z-10"
                    alt="School Logo"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-1000 animate-pulse-slow z-0" />
                </div>
                <div className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent text-xs font-bold tracking-wider text-center md:text-left">EXCELLENCE IN EDUCATION</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 md:mt-0 flex-1">
              <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-3 rounded-xl border-l-4 border-indigo-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-500/20 transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute h-32 w-32 -top-16 -right-16 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="mb-3 text-xs font-bold uppercase text-white relative inline-block tracking-wider">
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Address
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-0" />
                </h2>
                
                <ul className="text-gray-300 text-sm font-medium">
                  <li className="flex items-center group/item transition-colors">
                    <span className="p-1.5 mr-2 bg-indigo-500/10 rounded-lg group-hover/item:bg-indigo-500/20 transition-colors duration-300">
                      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="group-hover/item:text-indigo-400 transition-colors duration-300">Biratnagar, Nepal</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-3 rounded-xl border-l-4 border-teal-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-teal-500/20 transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute h-32 w-32 -top-16 -right-16 bg-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="mb-3 text-xs font-bold uppercase text-white relative inline-block tracking-wider">
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Details
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-green-500 rounded-full transition-all duration-300 group-hover:w-0" />
                </h2>
                
                <ul className="text-gray-300 text-sm font-medium">
                  <li className="flex items-center group/item transition-colors">
                    <span className="p-1.5 mr-2 bg-teal-500/10 rounded-lg group-hover/item:bg-teal-500/20 transition-colors duration-300">
                      <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    <div className="group-hover/item:text-teal-400 transition-colors duration-300 text-xs">
                      <p>9800000000</p>
                      <p>9811111111</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-3 rounded-xl border-l-4 border-amber-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-amber-500/20 transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute h-32 w-32 -top-16 -right-16 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="mb-3 text-xs font-bold uppercase text-white relative inline-block tracking-wider">
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Follow Us
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-300 group-hover:w-0" />
                </h2>
                
                <ul className="text-gray-300 text-sm font-medium space-y-2">
                  <li className="group/item">
                    <a href="https://www.facebook.com" className="flex items-center group/link transition-all duration-300">
                      <div className="p-1.5 mr-2 bg-gray-800/50 rounded-lg group-hover/link:bg-blue-600/20 transition-colors duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-600/0 group-hover/link:bg-blue-600/10 transition-colors duration-500"></div>
                        <svg className="w-4 h-4 text-blue-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                      </div>
                      <span className="group-hover/link:text-blue-400 transition-colors duration-300 text-xs">Facebook</span>
                      <div className="ml-2 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 group-hover/link:via-blue-500/50 transition-colors duration-500" />
                    </a>
                  </li>
                  <li className="group/item">
                    <a href="https://www.instagram.com" className="flex items-center group/link transition-all duration-300">
                      <div className="p-1.5 mr-2 bg-gray-800/50 rounded-lg group-hover/link:bg-pink-600/20 transition-colors duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-pink-600/0 group-hover/link:bg-pink-600/10 transition-colors duration-500"></div>
                        <svg className="w-4 h-4 text-pink-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                        </svg>
                      </div>
                      <span className="group-hover/link:text-pink-400 transition-colors duration-300 text-xs">Instagram</span>
                      <div className="ml-2 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1 group-hover/link:via-pink-500/50 transition-colors duration-500" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-900 px-4 py-1 text-purple-400 text-xs font-bold tracking-widest rounded-full border border-purple-500/20 shadow-md shadow-purple-500/5">
                CONNECT WITH US
              </span>
            </div>
          </div>

          <div className="text-center relative pb-2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-30 blur-xl" />
            <span className="text-xs text-gray-400 relative">
              ©️ {new Date().getFullYear()}{" "}
              <span className="font-semibold relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold">
                  Navatara English School
                </span>
              </span>
              <span className="mx-1">•</span>
              <span className="relative inline-block">
                All Rights Reserved
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;