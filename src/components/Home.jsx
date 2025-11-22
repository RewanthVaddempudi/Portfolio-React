import React from "react";
import { NavLink } from "react-router-dom";
import AboutPreview from "./AboutPreview";
import ServicePreview from "./ServicePreview";
import ProjectPreview from "./ProjectPreview";
import ContactPreview from "./ContactPreview";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="w-full bg-white flex items-start justify-between px-20 pt-20 pb-20">

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col gap-4 max-w-lg animate-slideDown">
          <div className="px-4 py-1 bg-blue-100 w-fit rounded-full text-blue-600 font-semibold">
            Hello !
          </div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            I'm <span className="text-blue-600 underline">Rewanth Vaddempudi</span>, <br />
            Web Designer & <br />
            Developer Enthusiast
          </h1>

          <p className="text-gray-500 text-lg">
            A passionate Web Developer skilled in building modern, responsive,
            and user-friendly websites using the latest technologies.
          </p>

          <div className="flex gap-4 mt-4">

            {/* Hire Me → Contact Page */}
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
            >
              Hire Me
            </NavLink>

            {/* WhatsApp → Chat with message */}
            <a
              href="https://wa.me/917410767733?text=Hello%20Rewanth,%20I%20want%20to%20hire%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600"
            >
              Whatsapp
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-max h-max bg-blue-100/40 rounded-full p-8 flex items-center justify-center">
          <img
            src="/HomePageImage.jpg"
            alt="HomePageImage"
            className="w-[650px] h-auto rounded-[30px] object-cover"
          />
        </div>

      </div>

      <AboutPreview />
      <ServicePreview />
      <ProjectPreview />
      <ContactPreview />
      <Footer />
    </>
  );
}

export default Home;
