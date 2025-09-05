// components/AboutSection.jsx
import React from "react";

function AboutSection({ title, children }) {
	return (
		<section className="relative">
			<h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 border-l-4 border-green-500 pl-4">
				{title}
			</h3>
			<div className="relative z-10">{children}</div>
			<div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-green-100 opacity-20 rounded-full -z-10"></div>
		</section>
	);
}

export default AboutSection;
