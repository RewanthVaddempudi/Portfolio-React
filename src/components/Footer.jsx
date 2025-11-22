import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-8 py-14">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700">Rewanth Vaddempudi</h2>
            <p className="text-gray-600 mt-3">
              Frontend Developer crafting modern, responsive, and user-friendly web experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-blue-600">About</NavLink></li>
              <li><NavLink to="/project" className="hover:text-blue-600">Projects</NavLink></li>
              <li><NavLink to="/service" className="hover:text-blue-600">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Connect</h3>

            <div className="flex gap-4 mt-4 text-blue-600 text-lg">
              <a href="https://github.com/RewanthVaddempudi" className="hover:text-blue-800">GitHub</a>
              <a href="https://www.linkedin.com/in/rewanthvaddempudi/" className="hover:text-blue-800">LinkedIn</a>
              <a href="https://www.instagram.com/nani._.25_/" className="hover:text-blue-800">Instagram</a>
            </div>

            <p className="text-gray-600 mt-4">
              Email: <span className="font-medium">rewanthveddempudi2234@gmail.com</span>
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600">
          © {new Date().getFullYear()} Rewanth Vaddempudi — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
