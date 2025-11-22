import React from "react";
import { NavLink } from "react-router-dom";

function ServicePreview() {
  return (
    <div className="px-20 py-20 bg-gray-50">

      {/* Section Container */}
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 max-w animate-aboutSlideLeft">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">Services</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl">
          I provide clean, modern UI/UX, responsive front-end development, and
          high-performance websites tailored for the best user experience.
        </p>

        {/* Services Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">UI / UX Design</h3>
            <p className="text-gray-600 text-sm">Creative and user-friendly interface designs.</p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">Frontend Development</h3>
            <p className="text-gray-600 text-sm">Responsive, fast, and modern websites.</p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">Web Performance</h3>
            <p className="text-gray-600 text-sm">Speed optimization & best coding practices.</p>
          </div>

        </div>

        {/* Read More Button */}
        <NavLink
          to="/service"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 font-medium"
        >
          Explore Services →
        </NavLink>

      </div>
    </div>
  );
}

export default ServicePreview;
