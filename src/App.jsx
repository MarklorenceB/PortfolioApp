import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Home/Hero";
import Services from "./Components/Home/Services";
import Projects from "./Components/Home/Projects";
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Footer";
import "./assets/styles/modern.css";
import TechStack from "./Components/Home/Techstack";
import WorkExperience from "./Components/Home/WorkExperience ";

const App = () => {
  return (
    <Router>
      <div className="app dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-10 dark:opacity-[0.03] -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50 Q50 0 100 50 Q50 100 0 50"
              stroke="currentColor"
              stroke-width="1"
              fill="none"
            />
            <path
              d="M100 50 Q50 100 0 50 Q50 0 100 50"
              stroke="currentColor"
              stroke-width="1"
              fill="none"
            />
          </svg>
        </div>
        <Navbar />
        <main className="relative ">
          <Hero />
          <Services />

          <TechStack />
          <WorkExperience />
          <Projects />
          <Contact />

          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
