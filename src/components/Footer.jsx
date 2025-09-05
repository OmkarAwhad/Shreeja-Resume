// components/Footer.jsx
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
   return (
      <footer className="w-full bg-gradient-to-r from-cyan-50 to-cyan-100 py-6 sm:py-8 px-4 sm:px-6">
         <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
               <a
                  href="https://www.linkedin.com/in/shreeja-burkul-208a66251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-navy hover:text-orange-500 transition-all duration-300"
               >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
               </a>
               <a
                  href="mailto:shreejasburkul123@gmail.com"
                  className="flex items-center text-navy hover:text-orange-500 transition-all duration-300"
               >
                  <MdEmail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Email</span>
               </a>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
               © {new Date().getFullYear()} Shreeja Burkul. All rights reserved.
            </p>
         </div>
      </footer>
   );
}

export default Footer;
