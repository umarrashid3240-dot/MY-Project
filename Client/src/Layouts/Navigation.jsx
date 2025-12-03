

import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { FcHome } from "react-icons/fc";
import { IoMdMailUnread } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";

const nav_links = [
  { id: 1, title: 'Home', url: '/', icon: <FcHome /> },
  { id: 2, title: 'About Us', url: '/aboutus', icon: <FaUserSecret /> },
  { id: 3, title: 'Categories', url: '/categories', icon: <IoMdMailUnread /> },
  { id: 4, title: 'Contact Us', url: '/contactus', icon: <IoIosMail /> },
];

const Navigation = () => {
  return (
    <div className="py-6 bg-gradient-to-r from-teal-500 via-slate-800 to-red-800">
      <div className="flex justify-center items-center flex-wrap gap-4">

        {/* Logo Area */}
        <div className="logo p-3 border-2 w-20 border-white hover:bg-white hover:text-red-600 rounded-md text-white font-italic text-center">
          <h1>Logo</h1>
        </div>

        {/* Navigation Links */}
        {nav_links.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            className="flex items-center gap-2"
          >
            <span className="border-2 border-white hover:border-yellow-500 rounded-md p-3 text-white hover:text-red-600 hover:bg-white transition duration-300 transform hover:scale-110">
              {item.title} {item.icon}
            </span>
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Navigation;
