import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
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
  SiElementor,
  SiWoocommerce,
  SiShopify,
  SiSanity,
  SiAppwrite,
  SiVercel,
  SiNetlify,
  SiBitbucket,
  SiJenkins,
} from "react-icons/si";
import {
  MonitorSmartphone,
  Layers,
  Server,
  Rocket,
  KeyRound,
  Plug,
  Search,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import Reveal from "../Reveal";

const GROUPS = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },
      { name: "Sass", icon: <SiCss3 className="text-pink-400" /> },
    ],
  },
  {
    title: "CMS & E-Commerce",
    icon: <Layers className="w-5 h-5 text-sky-400" />,
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-blue-400" /> },
      { name: "Headless WordPress", icon: <SiWordpress className="text-cyan-300" /> },
      { name: "Elementor", icon: <SiElementor className="text-pink-500" /> },
      { name: "WooCommerce", icon: <SiWoocommerce className="text-purple-400" /> },
      { name: "Sanity", icon: <SiSanity className="text-red-400" /> },
      { name: "Shopify", icon: <SiShopify className="text-green-500" /> },
    ],
  },
  {
    title: "Backend & Tools",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    skills: [
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
      { name: "ASP.NET", icon: <SiDotnet className="text-purple-500" /> },
      { name: "Appwrite", icon: <SiAppwrite className="text-pink-400" /> },
      { name: "Auth.js", icon: <KeyRound className="w-4 h-4 text-emerald-400" /> },
      { name: "REST APIs", icon: <Plug className="w-4 h-4 text-slate-300" /> },
    ],
  },
  {
    title: "Deployment & Workflow",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-red-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Bitbucket", icon: <SiBitbucket className="text-blue-500" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
      { name: "SEO", icon: <Search className="w-4 h-4 text-amber-400" /> },
      { name: "AI Tools", icon: <Sparkles className="w-4 h-4 text-indigo-300" /> },
      { name: "Prompt Engineering", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
    ],
  },
  {
    title: "Interactive & AI",
    icon: <Gamepad2 className="w-5 h-5 text-pink-400" />,
    skills: [
      { name: "Phaser", icon: <Gamepad2 className="w-4 h-4 text-pink-300" /> },
      { name: "HTML5 Canvas", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Playable Ads", icon: <Sparkles className="w-4 h-4 text-amber-300" /> },
      { name: "Framer Motion", icon: <Sparkles className="w-4 h-4 text-purple-300" /> },
      { name: "Figma", icon: <Layers className="w-4 h-4 text-sky-300" /> },
      { name: "Website Audits", icon: <Search className="w-4 h-4 text-emerald-300" /> },
      { name: "Image Editing", icon: <Sparkles className="w-4 h-4 text-indigo-300" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="about" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <span className="eyebrow">// tech stack</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-14">
            The tools and technologies I use to design, build, and ship
            production-ready websites and applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GROUPS.map((group, index) => (
            <Reveal
              key={group.title}
              delay={(index % 2) * 100}
              className="glass-card glass-card-hover p-7 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  {group.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100 m-0">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-cyan-500/40 hover:text-slate-100 transition-colors"
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
