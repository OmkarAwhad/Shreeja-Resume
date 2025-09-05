// components/EducationCard.jsx
import React from "react";

function EducationCard({
   degree,
   years,
   institute,
   department,
   grade,
   thesis,
}) {
   return (
      <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-600 p-4 sm:p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
         <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">{degree}</h3>
         <p className="text-xs sm:text-sm text-gray-500 mb-3">{years}</p>
         <p className="text-gray-800 font-semibold text-sm sm:text-base">{department}</p>
         <p className="text-gray-600 mb-2 text-sm sm:text-base">{institute}</p>
         <p className="text-xs sm:text-sm text-gray-500">
            Grade: <span className="text-orange-500 font-medium">{grade}</span>
         </p>
         {thesis && (
            <p className="text-xs sm:text-sm text-gray-700 mt-3">
               <span className="text-green-700 font-medium">Thesis: </span>
               {thesis}
            </p>
         )}
      </div>
   );
}

export default EducationCard;
