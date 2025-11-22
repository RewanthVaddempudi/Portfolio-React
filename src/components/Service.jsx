import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Service() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER SECTION */}
      <div className="bg-blue-600 text-white py-14">
        <h1 className="text-5xl font-bold text-center animate-aboutSlideRight">
          Services
        </h1>

        {/* Breadcrumb */}
        <p className="text-white/80 text-lg text-center flex justify-center gap-2 mt-3 animate-aboutSlideRight">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <span className="text-white/60">{">"}</span>
          <NavLink to="/service" className="text-white font-semibold">Services</NavLink>
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16 animate-aboutSlideRight">

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-bold text-gray-800">What I Offer</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          I provide modern, efficient, and visually appealing frontend solutions
          using React, JavaScript, and Tailwind CSS.
        </p>

        {/* SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-blue-700">UI / UX Design</h3>
            <p className="text-gray-600 mt-2">
              Clean, modern, and visually appealing interface design concepts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-semibold text-blue-700">Frontend Development</h3>
            <p className="text-gray-600 mt-2">
              Building responsive, fast, and user-friendly websites using React.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-blue-700">Performance Optimization</h3>
            <p className="text-gray-600 mt-2">
              Improving website speed, accessibility, and overall user experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🧩</div>
            <h3 className="text-xl font-semibold text-blue-700">Custom Components</h3>
            <p className="text-gray-600 mt-2">
              Developing reusable, scalable components tailored to your project.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="text-xl font-semibold text-blue-700">API Integration</h3>
            <p className="text-gray-600 mt-2">
              Connecting your frontend to backend APIs with clean JS logic.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white rounded-2xl shadow border border-gray-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-xl font-semibold text-blue-700">Bug Fixing</h3>
            <p className="text-gray-600 mt-2">
              Identifying and resolving frontend issues to ensure smooth performance.
            </p>
          </div>

        </div>

        {/* WHY CHOOSE ME SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mt-20">
          Why Choose Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-700">✨ Clean Code</h3>
            <p className="text-gray-700 mt-2">
              I focus on readability, reusability, and scalable architecture.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-700">🎯 Result Focused</h3>
            <p className="text-gray-700 mt-2">
              I deliver efficient and user-friendly experiences every time.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-700">⚙️ Modern Tools</h3>
            <p className="text-gray-700 mt-2">
              Using React, Tailwind, Git, and APIs to build powerful interfaces.
            </p>
          </div>

        </div>

        {/* TOOLS SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mt-20">Tools I Use</h2>

        <div className="flex flex-wrap gap-4 mt-6 text-gray-700">

          {["React", "Tailwind CSS", "JavaScript", "Git", "GitHub", "VS Code", "Figma", "Vite"].map((tool) => (
            <span
              key={tool}
              className="px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
            >
              {tool}
            </span>
          ))}

        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <NavLink
            to="/contact"
            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
          >
            Let's Work Together →
          </NavLink>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Service;
