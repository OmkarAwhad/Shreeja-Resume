// components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full sticky top-0 z-50 bg-gradient-to-r from-cyan-50 to-cyan-100">
			<div className="max-w-7xl mx-auto flex justify-between items-center min-h-[60px] sm:min-h-[80px] px-4 sm:px-6 text-navy text-lg sm:text-xl md:text-2xl font-medium">
				<div className="hidden md:flex space-x-6 lg:space-x-8">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/"}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/works"}
					>
						Works
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/about"}
					>
						About
					</NavLink>
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-2xl border-none outline-none focus:outline-none"
					>
						{isOpen ? "✕" : "☰"}
					</button>
				</div>
				<div className="border border-green-500 px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-green-500 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 text-sm sm:text-base">
					<a
						target="_blank"
						href="https://drive.google.com/file/d/1L_ph0HV033NYzbwFqBecZp66k691jrNI/view?usp=sharing"
					>
						Hire Me
					</a>
				</div>
			</div>
			<div
				className={`md:hidden fixed top-[60px] sm:top-[80px] left-0 w-64 h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] bg-gradient-to-r from-cyan-50 to-cyan-100 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex flex-col space-y-4 text-center pt-6 px-4 text-navy text-lg font-medium">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/"}
						onClick={() => setIsOpen(false)}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/works"}
						onClick={() => setIsOpen(false)}
					>
						Works
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-green-500 border-b-2 border-green-500 pb-1"
								: "hover:text-orange-500 hover:border-b-2 hover:border-orange-500 pb-1 transition-all duration-200"
						}
						to={"/about"}
						onClick={() => setIsOpen(false)}
					>
						About
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
