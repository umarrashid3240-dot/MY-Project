import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 text-white  shadow-md py-3 px-6 flex items-center justify-center space-x-10">
      {/* 🟢 Men Dropdown */}
      <div className="relative group">
        <span className="text-gray-800 font-semibold cursor-pointer hover:inline-flex ">
          Men
        </span>

        {/* Dropdown Menu */}
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-1 pl-2 mr-18 min-w-[150px] z-50">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:font-extrabold rounded-t-lg transition"
          >
            Joggers
          </Link>
          <Link
            to="/sneakers"
            className="block px-4 py-2 text-gray-700  hover:font-extrabold transition"
          >
            Sneakers
          </Link>
          <Link
            to="/home"
            className="block px-4 py-2 text-gray-700  hover:font-extrabold rounded-b-lg transition"
          >
            Running Shoes
          </Link>
        </div>
      </div>

      {/* Optional future links */}
      <Link to="/women" className="text-gray-800 font-semibold ">
        Women
      </Link>
      <Link to="/Kidz" className="text-gray-800 font-semibold ">
        Kidz
      </Link>
    </div>
  );
};

export default SubNavbar;
