import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Detect scroll to add background/shadow
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-gray-900/90 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo / Brand */}
        <RouterLink
          to="/"
          className="flex items-center gap-2 font-bold text-xl no-underline"
        >
          <span className={`${hasScrolled ? "text-gray-100" : "text-white"}`}>
            ML
          </span>
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <ScrollLink
              to="home" // 👈 This matches your section ID
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer no-underline hover:text-cyan-400 transition-colors duration-300 ${
                hasScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about" // 👈 This matches your section ID
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer no-underline hover:text-cyan-400 transition-colors duration-300 ${
                hasScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects" // 👈 This matches your section ID
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer no-underline hover:text-cyan-400 transition-colors duration-300 ${
                hasScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer no-underline hover:text-cyan-400 transition-colors duration-300 ${
                hasScrolled ? "text-gray-200" : "text-white"
              }`}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className={hasScrolled ? "text-gray-200" : "text-white"} />
          ) : (
            <FiMenu className={hasScrolled ? "text-gray-200" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu}>
            <FiX className="text-2xl hover:text-cyan-400 transition" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-10 text-lg font-medium">
          <ScrollLink
            to="home" // 👈 This matches your section ID
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer no-underline hover:text-cyan-400"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about" // 👈 This matches your section ID
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer no-underline hover:text-cyan-400"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="cursor-pointer no-underline hover:text-cyan-400"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="cursor-pointer no-underline hover:text-cyan-400"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
