import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Reveal from "../Reveal";

const FOCUS_AREAS = [
  "Frontend Development",
  "WordPress Development",
  "Full-Stack Web Apps",
  "Playable Ads & Game UI",
  "SEO-Friendly Builds",
  "CMS Integration",
  "AI-Assisted Development",
  "Deployment & Performance",
];

const WORK_EXPERIENCE = [
  {
    role: "Full-Stack Web Developer",
    company: "VDEV Studio",
    period: "2026 - Present",
    current: true,
    details: [
      "Build and improve modern websites and web applications using Next.js, React, WordPress, and Headless WordPress.",
      "Develop CMS-powered websites with clean frontend implementation, responsive layouts, SEO structure, and performance optimization.",
      "Handle full website builds end-to-end — design improvement, development, deployment, testing, and client revisions.",
      "Use AI-assisted development tools to speed up workflow, debugging, UI improvements, and code quality.",
    ],
  },
  {
    role: "Mid-Level Front-End Developer",
    company: "HPL Gamedesign Corp.",
    period: "Dec 2025 - May 2026",
    details: [
      "Engineered interactive playable ads and gamified mini-experiences for e-commerce brands and conversion-focused campaigns.",
      "Developed browser-based 2D game mechanics with Phaser and integrated them into React and Tailwind CSS builds.",
      "Created polished micro-interactions, scene transitions, and UI animations with Framer Motion.",
      "Optimized playable bundles for size, load speed, and cross-device performance on mobile networks.",
      "Translated creative storyboards into functional HTML5 builds ready for ad network deployment.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Customer Benefits Svcs Inc",
    period: "Mar 2024 – Jul 2025",
    details: [
      "Developed responsive, modern websites using React.js and Next.js, integrating dynamic UI components and state management.",
      "Built and maintained pages with HTML, CSS, JavaScript, and jQuery, with a strong focus on browser compatibility and accessibility.",
      "Ensured mobile responsiveness across devices using modern layout techniques — Flexbox, Grid, and media queries.",
      "Improved page speed by minimizing render-blocking resources, optimizing assets, and implementing lazy loading.",
      "Worked with ASP.NET Core and Razor views, combining C# logic with server-side rendered HTML.",
      "Collaborated with backend developers and designers to refine UI/UX and keep code consistent across the application.",
    ],
  },
  {
    role: "Frontend | WordPress Developer",
    company: "Brave Egg Internet Ideas, OPC",
    period: "Mar 2023 – Feb 2024",
    details: [
      "Converted HTML websites into fully manageable WordPress builds.",
      "Built client sites with Elementor, WooCommerce, Advanced Custom Fields (ACF), and Custom Post Types (CPT).",
      "Delivered performance optimization, mobile responsiveness, and Shopify development.",
    ],
  },
  {
    role: "Freelance WordPress Developer",
    company: "24Task Agency",
    period: "Feb – Sept 2023",
    details: [
      "Built and customized WordPress sites with Elementor and WooCommerce.",
      "Handled speed optimization, SEO improvements, and mobile responsiveness for client projects.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Frontline Business Solution",
    period: "Mar – Jul 2022",
    details: [
      "Designed web layouts in Figma and developed them with HTML, CSS, JavaScript, and jQuery.",
      "Built responsive designs with SASS and converted static HTML websites to WordPress.",
    ],
  },
];

const EDUCATION = [
  {
    period: "2018 – 2022",
    title: "Bachelor of Science in Information Technology",
    school: "Laguna State Polytechnic University",
  },
  {
    period: "2016 – 2018",
    title: "Information Technology",
    school: "ACLC San Pablo City",
  },
];

const CERTIFICATES = [
  {
    period: "Nov 2025",
    title: "Cloud and DevOps Basics",
    org: "DICT - CAR (ILCDB)",
  },
  {
    period: "Jul – Aug 2023",
    title: "Web Development for Web Developers",
    org: "DICT - Region IV-A",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="eyebrow">// career</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
            4+ Years of Building for the Web
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            From WordPress client sites to full-stack Next.js applications — a
            steady progression across the modern web stack.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 list-none p-0 m-0">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="font-mono text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work timeline */}
          <div className="lg:col-span-2">
            <Reveal as="h3" className="font-display text-xl font-semibold mb-8 flex items-center gap-2.5 text-slate-100">
              <Briefcase className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              Work Experience
            </Reveal>

            <div className="relative border-l border-slate-800 ml-2.5 space-y-10">
              {WORK_EXPERIENCE.map((job, idx) => (
                <Reveal
                  key={`${job.company}-${job.period}`}
                  variant="left"
                  delay={idx * 60}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 ${
                      job.current
                        ? "bg-cyan-400 border-cyan-300 pulse-dot"
                        : "bg-slate-900 border-slate-600"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="glass-card glass-card-hover p-6 rounded-xl">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
                      <h4 className="font-display text-lg font-semibold text-slate-100 m-0">
                        {job.role}
                      </h4>
                      {job.current && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2.5 py-0.5">
                          Present
                        </span>
                      )}
                    </div>
                    <p className="text-cyan-400 font-medium text-sm mb-1">
                      {job.company}
                    </p>
                    <p className="font-mono text-xs text-slate-500 mb-4">
                      {job.period}
                    </p>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {job.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-slate-400 text-sm leading-relaxed flex gap-2.5"
                        >
                          <span
                            className="text-cyan-500/70 mt-1.5 w-1 h-1 rounded-full bg-cyan-500/70 shrink-0"
                            aria-hidden="true"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education + Certificates */}
          <div>
            <Reveal as="h3" className="font-display text-xl font-semibold mb-8 flex items-center gap-2.5 text-slate-100">
              <GraduationCap
                className="w-5 h-5 text-cyan-400"
                aria-hidden="true"
              />
              Education
            </Reveal>
            <div className="space-y-5">
              {EDUCATION.map((edu, idx) => (
                <Reveal
                  key={edu.title}
                  variant="right"
                  delay={idx * 80}
                  className="glass-card glass-card-hover p-5 rounded-xl"
                >
                  <p className="font-mono text-xs text-slate-500 mb-1">
                    {edu.period}
                  </p>
                  <h4 className="text-sm font-semibold text-slate-100 mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-slate-400 m-0">{edu.school}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="font-display text-xl font-semibold mt-12 mb-8 flex items-center gap-2.5 text-slate-100">
              <Award className="w-5 h-5 text-amber-400" aria-hidden="true" />
              Certificates
            </Reveal>
            <div className="space-y-5">
              {CERTIFICATES.map((cert, idx) => (
                <Reveal
                  key={cert.title}
                  variant="right"
                  delay={idx * 80}
                  className="glass-card glass-card-hover p-5 rounded-xl"
                >
                  <p className="font-mono text-xs text-slate-500 mb-1">
                    {cert.period}
                  </p>
                  <h4 className="text-sm font-semibold text-slate-100 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-400 m-0">{cert.org}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
