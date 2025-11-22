import React from "react";
import { NavLink } from "react-router-dom";
import PortfolioIcon from "../assets/snaps/Portfolio_Icon.png";

function Navbar() {
  return (
    <div className="w-full h-40 bg-blue-600 py-3 px-10 shadow-md">

      {/* White glossy navbar */}
      <nav className="bg-white/90 backdrop-blur-md rounded-4xl px-4 py-3   flex items-center justify-between shadow">

        {/* Logo */}
        <div className="flex items-center gap-2 ml-7">
          <img
            src={PortfolioIcon}
            alt="logo"
            className="w-10 h-10"
          />
        </div>

        {/* Center Links */}
        <div className="flex gap-15 text-lg font-medium text-gray-500">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            About me
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Projects
          </NavLink>
        </div>

        {/* Contact Button */}
        <NavLink
          to="/contact"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow"
        >
          Contact me
        </NavLink>

      </nav>
    </div>
  );
}

export default Navbar;
