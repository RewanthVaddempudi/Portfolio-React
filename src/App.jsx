import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /><Home />
        </>
      ),
    },
    {
      path: "/service",
      element: (
        <>
          <Navbar /><Service />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar /><About />
        </>
      ),
    },
    {
      path: "/project",
      element: (
        <>
          <Navbar /><Project />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar /><Contact />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
