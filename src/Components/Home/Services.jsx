import React from "react";
import {
  FaLaptopCode,
  FaWordpress,
  FaSearch,
  FaPalette,
  FaDatabase,
  FaRobot,
  FaGamepad,
} from "react-icons/fa";
import Reveal from "../Reveal";

const SERVICES = [
  {
    icon: <FaLaptopCode className="text-cyan-400 text-4xl" />,
    title: "Full-Stack Web Development",
    description:
      "End-to-end websites and web applications built with React and Next.js — from clean, component-driven frontends to authentication, APIs, and deployment.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "APIs"],
  },
  {
    icon: <FaWordpress className="text-sky-400 text-4xl" />,
    title: "WordPress & Headless WordPress",
    description:
      "Custom WordPress builds with Elementor, WooCommerce, and ACF — plus modern Headless WordPress architectures powered by a Next.js frontend.",
    technologies: ["WordPress", "Elementor", "WooCommerce", "ACF", "Headless"],
  },
  {
    icon: <FaDatabase className="text-indigo-400 text-4xl" />,
    title: "CMS-Powered Websites",
    description:
      "Content-managed platforms your team can update without touching code — structured content, clean editing workflows, and scalable architecture.",
    technologies: ["Sanity", "WordPress", "Shopify", "Structured Content"],
  },
  {
    icon: <FaPalette className="text-pink-400 text-4xl" />,
    title: "Responsive Web Design",
    description:
      "Mobile-first layouts that look sharp and perform smoothly on every device — built with fluid grids, modern CSS, and careful attention to detail.",
    technologies: ["Tailwind CSS", "Bootstrap", "CSS Grid", "Mobile-first"],
  },
  {
    icon: <FaGamepad className="text-violet-400 text-4xl" />,
    title: "Playable Ads & Interactive Experiences",
    description:
      "Browser-based playable ads, gamified mini-experiences, and animated UI flows built for fast loading and smooth mobile performance.",
    technologies: ["Phaser", "HTML5 Canvas", "React", "Framer Motion"],
  },
  {
    icon: <FaSearch className="text-amber-400 text-4xl" />,
    title: "SEO & Performance",
    description:
      "Technical SEO, on-page structure, and speed optimization that help your site rank higher and load faster — measured, not guessed.",
    technologies: ["Technical SEO", "On-page SEO", "Core Web Vitals"],
  },
  {
    icon: <FaRobot className="text-emerald-400 text-4xl" />,
    title: "AI-Assisted Development",
    description:
      "Modern AI-assisted workflows that accelerate development, debugging, and QA — so projects ship faster without compromising code quality.",
    technologies: ["AI Workflows", "Rapid Prototyping", "Code Quality"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <span className="eyebrow">// what i do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
            Services I Offer
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-14">
            I help businesses grow online with fast, SEO-friendly websites and
            web applications — built end-to-end, from design to deployment.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 90}
              className="glass-card glass-card-hover group p-7 rounded-2xl flex flex-col items-start text-left h-full"
            >
              <div className="mb-5 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-slate-100">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
