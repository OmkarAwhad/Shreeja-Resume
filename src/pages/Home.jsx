// pages/Home.jsx
import React from "react";
import shreejaPhoto from "../assets/Photo3.jpg";

function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-start sm:items-center px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
			<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform hover:shadow-xl transition-all duration-300">
				{/* Left Column - Profile */}
				<div className="flex flex-col items-center text-center border-b-2 lg:border-b-0 lg:border-r-2 border-cyan-200 pb-6 lg:pb-0 lg:pr-6 xl:pr-8">
					<div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border-4 border-green-500 shadow-md mb-4 sm:mb-6 overflow-hidden">
						<img
							src={shreejaPhoto}
							alt="Shreeja Burkul"
							className="w-full h-full object-cover max-w-full h-auto"
							style={{
								imageRendering: "auto",
								objectFit: "cover",
							}}
						/>
					</div>
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">
						Miss. Shreeja Suresh Burkul
					</h1>
					<p className="text-base sm:text-lg text-orange-500 font-semibold mb-1">
						M.Tech (Chemical and Biotechnology), 2025
					</p>
					<p className="text-sm sm:text-md text-gray-600">
						Savitribai Phule Pune University
					</p>
				</div>

				{/* Right Column - About + Research */}
				<div className="flex flex-col justify-center space-y-6 sm:space-y-8">
					{/* About Myself */}
					<div>
						<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-navy mb-3 sm:mb-4 border-l-4 border-green-500 pl-3">
							About Myself
						</h2>
						<p className="text-gray-700 leading-relaxed mb-3 text-xs sm:text-sm md:text-base">
							I am eager to take on a dynamic role in the
							life sciences industry, where I can apply my
							academic background in Biotechnology,
							Agriculture, and Microbiology. With strong
							laboratory skills and solid research
							experience, I aim to contribute effectively
							to scientific innovation and production
							processes.
						</p>
						<p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
							My research passion comes from a desire to
							understand the core of Biotechnology and
							explore its applications in agriculture,
							healthcare, and microbiology research.
						</p>
					</div>

					{/* Research Interests */}
					<div>
						<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-navy mb-3 sm:mb-4 border-l-4 border-green-500 pl-3">
							Research Interests
						</h2>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 text-xs sm:text-sm md:text-base list-disc pl-6">
							<li>Biotechnology</li>
							<li>Microbiology</li>
							<li>Molecular Biology</li>
							<li>Recombinant DNA Technology</li>
							<li>Vaccine Technology</li>
							<li>Plant Biotechnology</li>
							<li>Plasma Manufacturing</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
