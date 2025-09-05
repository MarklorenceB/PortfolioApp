import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/images/Helix Icon.png"
            alt="Helix Logo"
            className="h-8 w-8"
          />
          <span className="text-sm">
            © {new Date().getFullYear()} Helix. All rights reserved.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-gray-400">
          <a href="#" className="hover:text-white">
            <FiFacebook size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FiTwitter size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FiInstagram size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
