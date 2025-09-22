import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState({});

  const projects = [
    {
      id: 1,
      title: "CineVerse",
      description:
        "A dynamic movie discovery platform built with React.js and powered by Appwrite...",
      image: "/images/cineverse.png",
      category: "fullstack",
      technologies: [
        "ReactJs",
        "Appwrite",
        "Tailwind CSS",
        "External API (TMDB)",
      ],
      liveUrl: "https://movieshub-mark.vercel.app/",
      githubUrl: "https://movieshub-mark.vercel.app/",
    },
    {
      id: 12,
      title: "InteriorWorks",
      description:
        "We are passionate about crafting modern, stylish, and sustainable furniture that fits perfectly into your lifestyle.",
      image: "/images/works.png",
      category: "frontend",
      technologies: ["ReactJs", "Html", "Css", "Javascript", "Bootstrap"],
      liveUrl: "https://interior-works.vercel.app/",
      githubUrl: "https://interior-works.vercel.app/",
    },

    {
      id: 13,
      title: "GPLC Devotion App",
      description:
        "GPLC Devotion is a modern, user-friendly web app designed to nurture your daily spiritual journey. It provides inspiring daily devotionals, thoughtful reflections, and scripture-based guidance to help you grow in faith and stay connected with God. Whether you’re starting your day or seeking a moment of reflection, GPLC Devotion offers easy access to meaningful content, interactive features, and a seamless reading experience on any device. Strengthen your spiritual life, one devotion at a time..",
      image: "/images/gplc.png",
      category: "fullstack",
      technologies: [
        "ReactJs",
        "NextJs",
        "Typescript",
        "Auth.js",
        "Sanity",
        "Tailwind",
      ],
      liveUrl: "https://gplcfamily-devotion.vercel.app/",
      githubUrl: "https://gplcfamily-devotion.vercel.app/",
    },
    {
      id: 2,
      title: "EPIC Storage Solutions",
      description:
        "Dorm-to-dorm storage solution for High Point University students and parents...",
      image: "/images/epic.png",
      category: "frontend",
      technologies: ["Html", "Css", "Javascript", "Bootstrap"],
      liveUrl: "https://riftofheroes.info/development/epic/index.html",
      githubUrl: "https://riftofheroes.info/development/epic/index.html",
    },
    {
      id: 3,
      title: "Society of Physicians in Dental",
      description:
        "Non-profit organization that advocates for patient safety in dental offices...",
      image: "/images/spdos.png",
      category: "frontend",
      technologies: ["Html", "Css", "Javascript", "Bootstrap"],
      liveUrl: "https://spdos.netlify.app/",
      githubUrl: "https://spdos.netlify.app/",
    },
    {
      id: 4,
      title: "Helix",
      description:
        "A static wellness-focused website highlighting nutrient-rich solutions and health restoration...",
      image: "/images/helix.png",
      category: "frontend",
      technologies: ["Html", "Css", "Javascript", "Bootstrap"],
      liveUrl: "https://helixshop.netlify.app/",
      githubUrl: "https://helixshop.netlify.app/",
    },
    {
      id: 5,
      title: "NextGizmoHub",
      description:
        "Sustainable in-home solutions platform focused on energy efficiency and eco-conscious living...",
      image: "/images/nextgiz.png",
      category: "frontend",
      technologies: ["Html", "CSS", "Javascript", "ASP.NET", "Bootstrap"],
      liveUrl: "https://nextgizmohub.com/",
      githubUrl: "https://nextgizmohub.com/",
    },

    {
      id: 6,
      title: "Velocity",
      description:
        "Velocity now offers clients even more IT firepower and technical expertise having expanded with renowned IT professional services firms StratusRed, City Computing and Talented City joining the Group.",
      image: "/images/velo.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://velocity-technology.com/",
      githubUrl: "https://velocity-technology.com/",
    },

    {
      id: 7,
      title: "NYC FIlm Locations",
      description:
        "Where art meets space for your visual storytelling. NYC Film Locations is a curated platform showcasing iconic and hidden filming spots across New York City. Designed for filmmakers, photographers, and content creators, it highlights diverse locations that bring stories to life while offering easy navigation and inspiration for creative projects.",
      image: "/images/nyc.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://nycfilmlocations.com/",
      githubUrl: "https://nycfilmlocations.com/",
    },

    {
      id: 8,
      title: "Franchise Leadership Center",
      description:
        "As a Franchisee, your ability to adapt fast and respond to the business market is vital. Having support from other peers is a gift you will receive in an FLC Forum",
      image: "/images/francise.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://flc.rocks/",
      githubUrl: "https://flc.rocks/",
    },

    {
      id: 9,
      title: "Bay Area Reverse Mortgages",
      description:
        "Bay Area home and having your home equity converted to pay you a consistent monthly cash flow, or a large lump sum of cash Discover the benefits of a Federally insured Reverse Mortgage or Home Equity Conversion Mortgage (HECM) for homeowners that are 62 years and older.",
      image: "/images/bay.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://www.bayareareversemortgages.com/",
      githubUrl: "https://www.bayareareversemortgages.com/",
    },

    {
      id: 10,
      title: "Meshelavraham",
      description:
        "We are an organization with the initiative to help emerging Jewish communities and provide services so that any individual interested in joining the Jewish people has the right tools to live a Jewish life.",
      image: "/images/machon.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://meshelavraham.com/",
      githubUrl: "https://meshelavraham.com/",
    },

    {
      id: 11,
      title: "Energi Elite",
      description:
        "At Energi Elite, we are passionate about providing accessibility to electric vehicles all over Malaysia. We believe in a sustainable future, and we are here to empower your journey by providing reliable, state-of-the-art EV charging solutions with the guidance to equip you with all the knowledge you’ll need. Our experienced team is dedicated to your satisfaction, offering personalized guidance and free consultations to ensure you find the right charger for your needs.",
      image: "/images/energy.png",
      category: "wordpress",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://energielite.com.my/",
      githubUrl: "https://energielite.com.my/",
    },
    {
      id: 11,
      title: "Sanctuary Tiny Homes",
      description:
        "anctuary Tiny Homes, where a Brit and a Kiwi come together with a shared passion for affordable, eco-friendly housing. After years of friendship and working different trades, we decided to combine our shared expertise and passion for tiny homes. We packed up and hit the road to Wanaka to embark on a journey to create a small, locally-run business tailored to our customers. Join us on this exciting journey toward a greener, more accessible future.",
      image: "/images/shopify.png",
      category: "shopify",
      technologies: ["shopify", "Html", "Css", "Javascript"],
      liveUrl: "https://sanctuarytinyhomes.co.nz/",
      githubUrl: "https://sanctuarytinyhomes.co.nz/",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "wordpress", label: "WordPress" },
    { id: "shopify", label: "Shopify" },
  ];

  const filteredProjects =
    filter === "all"
      ? showAll
        ? projects
        : projects.slice(0, 3)
      : projects.filter((project) => project.category === filter);

  const toggleExpanded = (projectId) => {
    setExpanded((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-black to-gray-900 text-white"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wide text-cyan-400">
            My Work
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in different areas of web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setShowAll(false); // reset on filter change
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === category.id
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isExpanded = expanded[project.id];
            const shouldTruncate = project.description.length > 100;
            const displayDescription =
              isExpanded || !shouldTruncate
                ? project.description
                : project.description.slice(0, 100) + "";

            return (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-cyan-500 rounded-md text-sm hover:bg-cyan-600"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-700 rounded-md text-sm hover:bg-gray-600"
                    >
                      Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {displayDescription}
                    </p>
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className="mt-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Show More Button */}
        {filter === "all" && projects.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
