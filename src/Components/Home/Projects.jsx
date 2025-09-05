import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Helix",
      description:
        "A static wellness-focused website highlighting nutrient-rich solutions and health restoration, featuring a clean hero section, mission statement, and easy navigation for users to learn more and get in touch.",
      image: "/src/assets/images/helix.png",
      category: "frontend",
      technologies: ["Html", "Css", "Javascript", "Bootstrap"],
      liveUrl: "https://helixshop.netlify.app/",
      githubUrl: "https://helixshop.netlify.app/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team workspace features.",
      image: "/src/assets/images/projects/taskapp.jpg",
      category: "frontend",
      technologies: ["React", "Redux", "Socket.io", "Tailwind"],
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/yourusername/taskapp",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that creates unique and engaging content for various purposes.",
      image: "/src/assets/images/projects/aicontent.jpg",
      category: "backend",
      technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
      liveUrl: "https://example.com/aigenerator",
      githubUrl: "https://github.com/yourusername/aigenerator",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for managing and analyzing social media presence across platforms.",
      image: "/src/assets/images/projects/dashboard.jpg",
      category: "frontend",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Chart.js"],
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/yourusername/dashboard",
    },

    {
      id: 5,
      title: "CineVerse",
      description:
        "A dynamic movie discovery platform built with React.js and powered by Appwrite for secure authentication and database management. CineVerse allows users to explore trending films, search movie details, and curate personalized watchlists. With a sleek hero section showcasing featured releases, intuitive navigation, and a mission to connect film lovers worldwide, CineVerse makes discovering and saving movies seamless.",
      image: "/src/assets/images/cineverse.png",
      category: "fullstack",
      technologies: [
        "ReactJs",
        "Appwrite (Auth + Database + Function",
        "Tailwind CSS",
        "External API → movie data is fetched from a third-party API (like TMDB)",
      ],
      liveUrl: "https://movieshub-mark.vercel.app/",
      githubUrl: "https://movieshub-mark.vercel.app/",
    },
    {
      id: 6,
      title: "NextGizmoHub",
      description:
        "A sustainable in-home solutions platform focused on energy efficiency and eco-conscious living. NexGizmoHub highlights innovative products designed to lower carbon footprints without compromising on comfort or reliability. Featuring a clean hero section, mission-driven content, and seamless navigation, the platform empowers users to discover and adopt solutions that reduce greenhouse gas emissions and conserve natural resources.",
      image: "/src/assets/images/nextgiz.png",
      category: "frontend",
      technologies: ["Html", "CSS", "Javascript", "ASP.NET", "Bootstrap"],
      liveUrl: "https://nextgizmohub.com/",
      githubUrl: "https://nextgizmohub.com/",
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
      ? projects
      : projects.filter((project) => project.category === filter);

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
              onClick={() => setFilter(category.id)}
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
          {filteredProjects.map((project, index) => (
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
                {/* Overlay */}
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
