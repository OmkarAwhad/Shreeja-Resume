// pages/Works.jsx
import React from "react";
import WorksCard from "../components/WorksCard";

function Works() {
   const experiences = [
      {
         title: "CSIR-NCL, Pune",
         date: "June 2024 - June 2025",
         role: "Dissertation - Exploring soil derived Rare Actinobacteria for novel bioactive compound",
         details: [
            "Identified rare actinomycetes by Sanger sequencing",
            "Studied antimicrobial activity",
            "Collected soil samples from Western Ghats to isolate rare Actinobacteria",
            "Selected strains based on molecular and morphological characteristics",
            "Metabolites identified using whole genome sequencing, showing significant antimicrobial activity",
            "Recommended further studies for scale-up, purification, and therapeutic applications",
         ],
      },
      {
         title: "Glorious Exotica, Pune",
         date: "Jan 2024 - Feb 2024",
         role: "Job Training - Sex determination of birds by Molecular techniques",
         details: [
            "Disease identification in animals using primer designing",
            "Designed primers specific to host, class, species, and genus",
            "PCR disease testing conducted on primates, crocodiles, lizards, snakes, and turtles",
            "Applied bioinformatics tools for precise primer design",
         ],
      },
      {
         title: "ICAR - Directorate of Floral Research, Pune",
         date: "Jan 2022 - April 2022",
         role: "Internship - Studied biochemical parameters of indoor plants and photosynthetic efficiency",
         details: [
            "Evaluated membrane stability index in ten indoor plants",
            "Assessed net photosynthesis in ten indoor plants",
            "Learned plant tissue culture techniques: in-vitro regeneration of Jasmine",
            "Promoted instrument handling practices during training",
         ],
      },
      {
         title: "K K Wagh College of Agricultural Biotechnology, Nashik",
         date: "July 2021 - Dec 2021",
         role: "Plant tissue culture techniques - In-vitro regeneration of Jasmine",
         details: [
            "Prepared sterilized media with growth regulators for Jasmine cultivation",
            "Produced disease- and pathogen-free Jasmine plants",
            "Maintained temperature and photoperiod conditions for optimal growth",
         ],
      },
   ];

   return (
      <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex items-center justify-center pr-6 sm:px-6 py-12 sm:py-16">
         <div className="max-w-6xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-12 sm:mb-16">
               Research Experience
            </h1>

            {/* Vertical Timeline */}
            <div className="relative sm:border-l-4 sm:border-green-500 sm:pl-8">
               {experiences.map((exp, index) => (
                  <WorksCard
                     key={index}
                     title={exp.title}
                     date={exp.date}
                     role={exp.role}
                     details={exp.details}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Works;
