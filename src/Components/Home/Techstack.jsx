import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiWordpress,
  SiDotnet,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiGit,
  SiSubversion,
  SiBitbucket,
  SiJenkins,
  SiElementor,
  SiWoocommerce,
  SiShopify,
} from "react-icons/si";

// Icons map
const ICONS = {
  React: <FaReact className="text-sky-400 text-5xl" />,

  JavaScript: <SiJavascript className="text-yellow-400 text-5xl" />,
  Html: <SiHtml5 className="text-blue-600 text-5xl" />,

  WordPress: <SiWordpress className="text-blue-500 text-5xl" />,
  ".NET": <SiDotnet className="text-purple-500 text-5xl" />,
  CSS: <SiCss3 className="text-blue-400 text-5xl" />,
  Bootstrap: <SiBootstrap className="text-indigo-600 text-5xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-5xl" />,
  PHP: <SiPhp className="text-indigo-400 text-5xl" />,
  MySQL: <SiMysql className="text-orange-500 text-5xl" />,
  Git: <SiGit className="text-red-500 text-5xl" />,
  SVN: <SiSubversion className="text-gray-400 text-5xl" />,
  Bitbucket: <SiBitbucket className="text-blue-500 text-5xl" />,
  Jenkins: <SiJenkins className="text-red-400 text-5xl" />,
  Elementor: <SiElementor className="text-pink-500 text-5xl" />,
  WooCommerce: <SiWoocommerce className="text-purple-400 text-5xl" />,
  Shopify: <SiShopify className="text-green-500 text-5xl" />,
};

// Tech stack list
const techList = [
  "React",

  "JavaScript",
  "Html",

  "WordPress",
  "ASP.NET",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "PHP",
  "MySQL",
  "Git",
  "SVN",
  "Bitbucket",
  "Jenkins",
  "Elementor",
  "WooCommerce",
  "Shopify",
];

export default function TechStack() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-900 to-black text-white"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">⚡ My Tech Stack</h2>
        <p className="text-gray-400 mb-12">
          Tools & technologies I use to design, build, and scale applications.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techList.map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl 
                         bg-white/5 backdrop-blur-md shadow-lg hover:scale-105 
                         transition-transform duration-300 hover:bg-white/10"
            >
              <div className="mb-3 group-hover:animate-bounce">
                {ICONS[tech] ?? (
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center text-lg">
                    {tech[0]}
                  </div>
                )}
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
