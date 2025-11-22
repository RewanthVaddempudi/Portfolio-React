import React from "react";
import { NavLink } from "react-router-dom";

function ContactPreview() {
  return (
    <div className="px-20 py-20 bg-gray-50">

      {/* Section Container */}
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 max animate-aboutSlideLeft">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl">
          Have a project in mind or want to collaborate? Feel free to connect with me.
        </p>

        {/* Contact Methods Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">Email</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reach me anytime for project inquiries or discussions.
            </p>
          </div>

          {/* WhatsApp */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">WhatsApp</h3>
            <p className="text-gray-600 text-sm mt-2">
              Quick communication and instant replies.
            </p>
          </div>

          {/* Location */}
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">Location</h3>
            <p className="text-gray-600 text-sm mt-2">
              Available for remote and in-person collaboration.
            </p>
          </div>

        </div>

        {/* Divider */}
        <hr className="mt-12 mb-8 border-blue-100" />

        {/* Button */}
        <NavLink
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 font-medium "
        >
          Contact Now →
        </NavLink>

      </div>
    </div>
  );
}

export default ContactPreview;
