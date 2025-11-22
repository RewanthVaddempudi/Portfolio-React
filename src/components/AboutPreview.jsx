import React from "react";
import { NavLink } from "react-router-dom";

function AboutPreview() {
  return (
    <div className="px-20 py-20 bg-gray-50">

      {/* Section Container */}
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 max-w animate-aboutSlideRight">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl">
          I am a passionate frontend developer focused on building clean,
          modern, and user-friendly web experiences using React, Tailwind CSS,
          and JavaScript. I love transforming ideas into beautiful interfaces.
        </p>

        {/* Skill Points */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">1+ Years</h3>
            <p className="text-gray-600 text-sm">Frontend learning experience</p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">10+ Projects</h3>
            <p className="text-gray-600 text-sm">Built using React & JavaScript</p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">UI/UX Focused</h3>
            <p className="text-gray-600 text-sm">Clean, modern designs</p>
          </div>

        </div>

        {/* Read More Button */}
        <NavLink
          to="/about"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 font-medium"
        >
          Read More →
        </NavLink>

      </div>
    </div>
  );
}

export default AboutPreview;

