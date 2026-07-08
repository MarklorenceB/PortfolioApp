import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "services", label: "Services" },
  { to: "about", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-[#05080f]/85 backdrop-blur-lg border-b border-white/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          {/* Brand */}
          <a
            href="#home"
            className="font-display font-bold text-xl text-slate-100 no-underline tracking-tight"
            aria-label="Mark Lorence Beron — back to top"
          >
            ML<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-sm list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  href={`#${link.to}`}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="!text-cyan-400"
                  className="cursor-pointer no-underline text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink
                href="#contact"
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer no-underline text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-2 rounded-lg hover:brightness-110 transition"
              >
                Hire Me
              </ScrollLink>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-2xl text-slate-100 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-[#0b1220] border-l border-white/10 transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/5">
          <span className="font-display font-bold text-lg text-slate-100">
            ML<span className="text-cyan-400">.</span>
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-slate-300 hover:text-cyan-400 transition p-1"
          >
            <FiX className="text-2xl" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col p-5 gap-1">
          {NAV_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              href={`#${link.to}`}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="cursor-pointer no-underline text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors rounded-lg px-4 py-3 font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}
          <ScrollLink
            href="#contact"
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="cursor-pointer no-underline text-center font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-3 rounded-lg mt-3"
          >
            Hire Me
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
