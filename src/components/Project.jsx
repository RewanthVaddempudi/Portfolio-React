import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import GithubImg from "../assets/snaps/GithubUserSearch.png";
import ChessImg from "../assets/snaps/ChessGame.png";
import TicTacToeImg from "../assets/snaps/TicTacToe Game.png";


function Project() {
  const projects = [
    {
      title: "GitHub User Search",
      desc: "A React + Tailwind project to search GitHub users using real API.",
      img: GithubImg,
      link: "https://github.com/RewanthVaddempudi/Github-User-Search"
    },
    {
      title: "Chess Game",
      desc: "Pure JavaScript logic-based chess board with DOM operations.",
      img: ChessImg,
      link: "https://github.com/RewanthVaddempudi/Chess-Game"
    },
    {
      title: "Tic Tac Toe",
      desc: "Beautiful UI with animations and smooth interactions.",
      img: TicTacToeImg,
      link: "https://github.com/RewanthVaddempudi/Tic-Tac-Toe"
    },
    {
      title: "Weather App",
      desc: "Fetch real-time weather using API with clean UI.",
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
      link: "https://your-weather-app-link.com"
    },
    {
      title: "To-Do App",
      desc: "A clean interactive to-do list with filters.",
      img: "https://images.unsplash.com/photo-1557683316-973673baf926",
      link: "https://your-todo-app-link.com"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER SECTION */}
      <div className="bg-blue-600 text-white py-14">
        <h1 className="text-5xl font-bold text-center animate-aboutSlideRight">
          My Projects
        </h1>

        {/* Breadcrumb */}
        <p className="text-white/80 text-lg text-center flex justify-center gap-2 mt-3 animate-aboutSlideRight">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <span className="text-white/60">{">"}</span>
          <NavLink to="/project" className="text-white font-semibold">Projects</NavLink>
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-16 animate-aboutSlideRight">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">All Projects</h2>
        <p className="text-gray-600 mt-4">
          A collection of my best work built with React, JavaScript, and modern UI design.
        </p>

        {/* PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 shadow rounded-2xl hover:shadow-lg transition overflow-hidden"
            >

              {/* IMAGE */}
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>

                {/* PROJECT LINK BUTTON */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                  Visit Project →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Project;
