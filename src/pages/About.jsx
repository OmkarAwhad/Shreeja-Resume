// pages/About.jsx
import React from "react";
import AboutSection from "../components/AboutSection";
import EducationCard from "../components/EducationCard";

function About() {
   const skills = [
      "Lyophilization",
      "FE-SEM",
      "Sanger sequencing",
      "HPLC",
      "GC",
      "TLC",
      "Fermenter",
      "Spectroscopy",
      "PCR",
      "Electrophoresis",
      "Sequencing",
   ];

   const instruments = [
      "UV-Visible Spectrophotometer",
      "Autoclave (Vertical & Horizontal)",
      "Electrospinning",
      "SEM",
      "FE-SEM",
      "Rota Evaporator",
      "Analytical & Digital Balance",
      "Digital Colony Counter",
      "Centrifuge",
      "pH meter",
      "Light Microscope",
      "HPLC",
      "GC",
      "Lyophilizer / Freeze Drier",
      "Fermenter",
      "Laminar Air Flow",
   ];

   const extracurriculars = [
      "Volunteer in Guinness World Record Campaign (Mere Mati Mera Desh)",
      "Volunteer in cultural fest (Tantra)",
      "Cleared 3 Exams of Classical Music",
      "Participation in cultural events in college and winning prizes (Traditional Day, Mismatch Day)",
   ];

   return (
      <div className="w-full min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6">
         <div className="max-w-7xl w-full space-y-12 sm:space-y-16">
            {/* Education Section */}
            <AboutSection title="Education">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <EducationCard
                     degree="Master of Technology"
                     years="2023 – 2025"
                     department="Department of Technology"
                     institute="Savitribai Phule Pune University, Pune"
                     grade="Awaiting"
                     thesis="Exploring soil-derived Rare Actinobacteria for novel bioactive compounds"
                  />
                  <EducationCard
                     degree="Bachelor of Biotechnology"
                     years="2018 – 2022"
                     department="Department of Agricultural Biotechnology"
                     institute="K. K. Wagh College of Agricultural Biotechnology, Nashik"
                     grade="7.8 CGPA"
                     thesis="Assessment of biochemical parameters and photosynthetic efficiency in indoor plants"
                  />
               </div>
            </AboutSection>

            {/* Skills Section */}
            <AboutSection title="Skills">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                     <div
                        key={index}
                        className="bg-white border border-green-200 rounded-xl p-3 sm:p-4 text-center text-gray-700 text-xs sm:text-sm font-medium transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                     >
                        {skill}
                     </div>
                  ))}
               </div>
            </AboutSection>

            {/* Instruments Section */}
            <AboutSection title="Instrument Handling">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {instruments.map((instrument, index) => (
                     <div
                        key={index}
                        className="bg-white border border-green-200 rounded-xl p-3 sm:p-4 text-center text-gray-700 text-xs sm:text-sm font-medium transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                     >
                        {instrument}
                     </div>
                  ))}
               </div>
            </AboutSection>

            {/* Extracurricular Section */}
            <AboutSection title="Extracurricular Activities">
               <div className="space-y-4">
                  {extracurriculars.map((activity, index) => (
                     <div
                        key={index}
                        className="bg-white border border-green-200 rounded-xl p-3 sm:p-4 text-gray-700 text-xs sm:text-sm font-medium transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                     >
                        {activity}
                     </div>
                  ))}
               </div>
            </AboutSection>
         </div>
      </div>
   );
}

export default About;
