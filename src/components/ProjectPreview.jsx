import React from "react";
import { NavLink } from "react-router-dom";

function ProjectPreview() {
  return (
    <div className="px-20 py-20 bg-gray-50">

      {/* Section Container */}
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 max-w animate-aboutSlideRight">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl">
          A showcase of my best work — from responsive UI layouts to functional
          JavaScript and React applications.
        </p>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Project 1 */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">React UI Showcase</h3>
            <p className="text-gray-600 text-sm mt-2">
              Modern responsive UI components built using React + Tailwind CSS.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">JavaScript Apps</h3>
            <p className="text-gray-600 text-sm mt-2">
              Interactive projects built with pure JavaScript & DOM manipulation.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">Frontend Mini Projects</h3>
            <p className="text-gray-600 text-sm mt-2">
              Small creative projects like to-do apps, calculators, and more.
            </p>
          </div>

        </div>

        {/* Divider */}
        <hr className="mt-12 mb-8 border-blue-100" />

        {/* Button */}
        <NavLink
          to="/project"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 font-medium"
        >
          View All Projects →
        </NavLink>

      </div>
    </div>
  );
}

export default ProjectPreview;
