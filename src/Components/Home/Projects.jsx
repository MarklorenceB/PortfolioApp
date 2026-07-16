import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "../Reveal";

const PROJECTS = [
  {
    id: 18,
    title: "GPLC Finance Desk",
    description:
      "A full-stack church finance web app with PBKDF2 session auth, cash-denomination tracking, a due-date calendar, and automated PowerPoint report generation — deployed on Cloudflare Workers with a D1 database.",
    image: "/images/gplc-finance.png",
    category: "fullstack",
    technologies: [
      "React 19",
      "TypeScript",
      "Next.js",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Drizzle ORM",
    ],
    liveUrl: "https://gplc-finance.gplcfinance.workers.dev",
  },
  {
    id: 1,
    title: "CineVerse",
    description:
      "A dynamic movie discovery platform built with React and Appwrite, featuring live search, trending analytics, and data from the TMDB API.",
    image: "/images/cineverse.png",
    category: "fullstack",
    technologies: ["React", "Appwrite", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://movieshub-mark.vercel.app/",
  },
  {
    id: 2,
    title: "GPLC Devotion App",
    description:
      "A CMS-powered devotional web app with daily readings, reflections, and authentication — built with Next.js, TypeScript, and Sanity for structured content management.",
    image: "/images/gplc.png",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "Auth.js", "Sanity", "Tailwind CSS"],
    liveUrl: "https://gplcfamily-devotion.vercel.app/",
  },
  {
    id: 3,
    title: "InteriorWorks",
    description:
      "A modern furniture brand website showcasing stylish, sustainable interior collections with a clean, responsive product layout.",
    image: "/images/works.png",
    category: "frontend",
    technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
    liveUrl: "https://interior-works.vercel.app/",
  },
  {
    id: 4,
    title: "Real Estate Agent",
    description:
      "A conversion-focused website for a real estate agent — property highlights, trust-building content, and clear calls to action throughout.",
    image: "/images/agent.png",
    category: "frontend",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://marcimetzger-realestate.vercel.app/",
  },
  {
    id: 5,
    title: "EPIC Storage Solutions",
    description:
      "A dorm-to-dorm storage service website for High Point University students and parents, with clear pricing and booking flows.",
    image: "/images/epic.png",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://riftofheroes.info/development/epic/index.html",
  },
  {
    id: 6,
    title: "Society of Physicians in Dental",
    description:
      "A website for a non-profit organization advocating patient safety in dental offices, with a focus on clarity and accessibility.",
    image: "/images/spdos.png",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://spdos.netlify.app/",
  },
  {
    id: 7,
    title: "Helix",
    description:
      "A wellness-focused brand website highlighting nutrient-rich solutions and health restoration with a clean, product-led design.",
    image: "/images/helix.png",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://helixshop.netlify.app/",
  },
  {
    id: 8,
    title: "NextGizmoHub",
    description:
      "A sustainable in-home solutions platform focused on energy efficiency and eco-conscious living, built with ASP.NET integration.",
    image: "/images/nextgiz.png",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "ASP.NET", "Bootstrap"],
    liveUrl: "https://nextgizmohub.com/",
  },
  {
    id: 9,
    title: "Velocity",
    description:
      "A corporate website for a UK IT professional services group, presenting its expanded expertise after merging with three renowned firms.",
    image: "/images/velo.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://velocity-technology.com/",
  },
  {
    id: 10,
    title: "NYC Film Locations",
    description:
      "A curated platform showcasing iconic and hidden filming spots across New York City — built for filmmakers, photographers, and creators.",
    image: "/images/nyc.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://nycfilmlocations.com/",
  },
  {
    id: 11,
    title: "Franchise Leadership Center",
    description:
      "A community platform where franchisees connect through peer forums to adapt faster and respond to a changing business market.",
    image: "/images/francise.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://flc.rocks/",
  },
  {
    id: 12,
    title: "Bay Area Reverse Mortgages",
    description:
      "A lead-generation website for a Bay Area mortgage specialist, explaining federally insured reverse mortgage options for homeowners 62+.",
    image: "/images/bay.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://www.bayareareversemortgages.com/",
  },
  {
    id: 13,
    title: "Meshelavraham",
    description:
      "A website for an organization supporting emerging Jewish communities with the resources and services to live a Jewish life.",
    image: "/images/machon.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://meshelavraham.com/",
  },
  {
    id: 14,
    title: "Energi Elite",
    description:
      "A website for a Malaysian EV charging company, offering reliable charging solutions, expert guidance, and free consultations.",
    image: "/images/energy.png",
    category: "wordpress",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://energielite.com.my/",
  },
  {
    id: 15,
    title: "Surf to Sawa",
    description:
      "A cross-platform mobile app connecting surfers with local spots, conditions, and community features — built with a clean, performant UI.",
    image: "/images/s2sapp.png",
    category: "mobile",
    technologies: ["React Native", "Expo", "JavaScript", "REST API"],
  },
  {
    id: 16,
    title: "StayPablo",
    description:
      "A mobile booking experience for short-stay rentals with listing discovery, availability, and a streamlined reservation flow.",
    image: "/images/staypabloapp.png",
    category: "mobile",
    technologies: ["React Native", "Expo", "JavaScript", "REST API"],
  },
  {
    id: 17,
    title: "Sanctuary Tiny Homes",
    description:
      "An e-commerce site for a New Zealand tiny home builder focused on affordable, eco-friendly housing — built on Shopify.",
    image: "/images/shopify.png",
    category: "shopify",
    technologies: ["Shopify", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://sanctuarytinyhomes.co.nz/",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" },
  { id: "wordpress", label: "WordPress" },
  { id: "shopify", label: "Shopify" },
];

const INITIAL_COUNT = 6;

const isRealUrl = (url) => typeof url === "string" && url.startsWith("http");

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const matching =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  const visibleProjects = showAll ? matching : matching.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="eyebrow">// my work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of client and personal projects — from full-stack web
            apps and CMS platforms to WordPress and e-commerce builds.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setFilter(category.id);
                setShowAll(false);
              }}
              aria-pressed={filter === category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === category.id
                  ? "bg-cyan-500 border-cyan-400 text-slate-950 shadow-[0_6px_20px_-8px_rgba(34,211,238,0.7)]"
                  : "bg-white/5 border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-slate-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal
              as="article"
              key={project.id}
              delay={(index % 3) * 90}
              className="glass-card glass-card-hover group rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.title} website`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-60"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-slate-100 m-0">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {isRealUrl(project.githubUrl) &&
                      project.githubUrl.includes("github.com") && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    {isRealUrl(project.liveUrl) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the live ${project.title} website`}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Show more */}
        {matching.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll
                ? "Show Less"
                : `Show All ${matching.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
