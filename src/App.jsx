import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Home/Hero";
import Services from "./Components/Home/Services";
import TechStack from "./Components/Home/Techstack";
import WorkExperience from "./Components/Home/WorkExperience";
import Projects from "./Components/Home/Projects";
import Testimonials from "./Components/Home/Testimonials";
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <Services />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
