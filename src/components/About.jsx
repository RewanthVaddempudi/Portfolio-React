import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER SECTION */}
      <div className="bg-blue-600 tgit remoteext-white py-14">
        <h1 className="text-5xl font-bold text-center animate-aboutSlideRight">
          About Me
        </h1>

        {/* Breadcrumb */}
        <p className="text-white/80 text-lg text-center flex justify-center gap-2 mt-3 animate-aboutSlideRight">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <span className="text-white/60">{">"}</span>
          <NavLink to="/about" className="text-white font-semibold">About Me</NavLink>
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* ● PERSONAL INTRO SECTION */}
        <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-10 animate-aboutSlideRight">

          {/* Profile Image */}
          <div className="w-48 h-48 rounded-2xl bg-blue-200 shadow-inner mx-auto md:mx-0"></div>

          {/* Intro Text */}
          <div className="text-gray-800">
            <h2 className="text-3xl font-bold">Hi, I'm Rewanth 👋</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              I’m a passionate Frontend Developer who loves building clean,
              responsive and interactive web experiences using React, JavaScript,
              and Tailwind CSS.  
              <br /><br />
              My focus is on creating beautiful UI, smooth animations, and 
              user-friendly interfaces that make websites feel modern and alive.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-700">1+ Years</h3>
                <p className="text-gray-600 text-sm">Frontend experience</p>
              </div>

              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-700">10+ Projects</h3>
                <p className="text-gray-600 text-sm">Using React & JavaScript</p>
              </div>

              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-700">UI/UX Focused</h3>
                <p className="text-gray-600 text-sm">Modern & clean designs</p>
              </div>

            </div>
          </div>
        </div>

        {/* ● WHAT I DO SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mt-16 animate-aboutSlideRight">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 animate-aboutSlideRight">

          <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700">Frontend Development</h3>
            <p className="text-gray-600 mt-2">
              Building responsive UIs using React, JavaScript & Tailwind CSS.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700">UI/UX Implementation</h3>
            <p className="text-gray-600 mt-2">
              Turning designs into functional, clean, and modern interfaces.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700">Problem Solving</h3>
            <p className="text-gray-600 mt-2">
              Writing clean logic, optimizing components & improving performance.
            </p>
          </div>

        </div>

        {/* ● UPDATED TECH STACK SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mt-16 animate-aboutSlideRight">
          Tech Stack
        </h2>

        <div className="mt-10 space-y-10 animate-aboutSlideRight">

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Programming Languages</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["C", "JavaScript", "Java", "Python"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Web Technologies</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["HTML", "CSS", "React.js", "Node.js", "Express.js"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Databases</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["MySQL", "MongoDB"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Developer Tools</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["Git", "GitHub", "VS Code"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Other Skills</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["API Integration", "Problem Solving", "Responsive Design", "UI/UX"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Education</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {["B.Tech (2022 - 2026)", "Computer Science & Engineering"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ● EXPERIENCE TIMELINE */}
        <h2 className="text-3xl font-bold text-gray-800 mt-16 animate-aboutSlideRight">
          My Journey
        </h2>

        <div className="mt-8 border-l-4 border-blue-600 pl-6 space-y-6 animate-aboutSlideRight">

          <div>
            <h3 className="text-xl font-bold text-blue-600">2023 — Started Coding</h3>
            <p className="text-gray-600">Learned HTML, CSS, and JavaScript basics.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600">2024 — React & Projects</h3>
            <p className="text-gray-600">
              Built projects like GitHub User Search, Chess Game.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-600">2025 — Building Portfolio</h3>
            <p className="text-gray-600">
              Learning full-stack & creating advanced UI projects using React.
            </p>
          </div>

        </div>

        {/* ● BUTTONS */}
        <div className="mt-16 flex gap-6 animate-aboutSlideRight">
          <a
            href="/Resume1.pdf"
            download="Rewanth-Resume"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <NavLink
            to="/contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-black transition"
          >
            Contact Me
          </NavLink>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;
