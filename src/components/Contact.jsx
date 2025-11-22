import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER SECTION */}
      <div className="bg-blue-600 text-white py-14">
        <h1 className="text-5xl font-bold text-center animate-aboutSlideRight">
          Contact Me
        </h1>

        {/* Breadcrumb */}
        <p className="text-white/80 text-lg text-center flex justify-center gap-2 mt-3 animate-aboutSlideRight">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <span className="text-white/60">{">"}</span>
          <NavLink to="/contact" className="text-white font-semibold">Contact</NavLink>
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16 animate-aboutSlideRight">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-3 max-w-xl">
          Have a project idea or want to collaborate? Feel free to reach out using the form below or any of the contact options.
        </p>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

          {/* LEFT — CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-700">Send a Message</h3>

            <form className="mt-6 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />

              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message →
              </button>

            </form>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="space-y-8">

            {/* Email */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow">
              <h3 className="text-xl font-semibold text-blue-700">Email</h3>
              <p className="text-gray-600 mt-2">rewanthveddempudi2234@gmail.com</p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow">
              <h3 className="text-xl font-semibold text-blue-700">WhatsApp</h3>
              <p className="text-gray-600 mt-2">+91 7410767733</p>
            </div>

            {/* Location */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow">
              <h3 className="text-xl font-semibold text-blue-700">Location</h3>
              <p className="text-gray-600 mt-2">Based in India, flexible for remote projects and onsite roles.</p>
            </div>

            {/* Socials */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow">
              <h3 className="text-xl font-semibold text-blue-700">Follow Me</h3>

              <div className="flex gap-6 mt-4 text-blue-600 text-lg">
                <a href="https://github.com/RewanthVaddempudi" className="hover:text-blue-800">GitHub</a>
                <a href="https://www.linkedin.com/in/rewanthvaddempudi/" className="hover:text-blue-800">LinkedIn</a>
                <a href="https://www.instagram.com/nani._.25_/" className="hover:text-blue-800">Instagram</a>
              </div>
            </div>

          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <NavLink
            to="/"
            className="px-8 py-3 bg-gray-800 text-white text-lg rounded-lg shadow hover:bg-black transition"
          >
            Back to Home →
          </NavLink>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Contact;
