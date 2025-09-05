import React from "react";

function WorksCard({ title, date, role, details }) {
	return (
		<div className="relative pl-8 sm:pl-12 pb-8 sm:pb-12">
			<div className="absolute hidden sm:block -left-6.5 sm:-left-12 top-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-white shadow-md transform transition-all duration-300 hover:scale-125"></div>

			<div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-600 p-4 sm:p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
				<h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">
					{title}
				</h2>
				<p className="text-xs sm:text-sm text-gray-500 mb-3">
					{date}
				</p>
				<p className="text-base sm:text-lg font-semibold text-orange-500 mb-4">
					{role}
				</p>
				<ul className="list-disc pl-5 space-y-2 text-gray-700 text-xs sm:text-sm">
					{details.map((point, i) => (
						<li key={i} className="leading-relaxed">
							{point}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default WorksCard;
