import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg text-slate-100 m-0">
            ML<span className="text-cyan-400">.</span>
          </p>
          <p className="text-sm text-slate-500 mt-1 mb-0">
            © {new Date().getFullYear()} Mark Lorence Beron — Full-Stack Web
            Developer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/MarklorenceB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <FiGithub size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-lorence-beron-bba8a8221/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <FiLinkedin size={18} aria-hidden="true" />
          </a>
          <a
            href="mailto:marklorenceberon06@gmail.com"
            aria-label="Send an email"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <FiMail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
