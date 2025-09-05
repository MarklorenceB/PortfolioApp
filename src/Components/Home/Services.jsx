import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaWordpress,
  FaSearch,
  FaPalette,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-sky-400 text-5xl" />,
      title: "Website Development",
      description:
        "I create fast, secure, and professional websites using HTML and modern web technologies, hosted on reliable servers.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: <FaPalette className="text-pink-400 text-5xl" />,
      title: "Responsive Web Design",
      description:
        "I design layouts that adjust seamlessly across all devices using media queries and fluid grids.",
      technologies: ["Tailwind", "Bootstrap", "CSS Grid"],
    },
    {
      icon: <FaMobileAlt className="text-green-400 text-5xl" />,
      title: "Mobile Optimization",
      description:
        "I ensure your website is fully responsive and user-friendly on smartphones and tablets for better UX and SEO.",
      technologies: ["Responsive UI", "SEO", "Mobile-first"],
    },
    {
      icon: <FaWordpress className="text-blue-400 text-5xl" />,
      title: "WordPress Development",
      description:
        "I build and customize WordPress websites with themes, plugins, SEO tools, and eCommerce integration.",
      technologies: ["WordPress", "WooCommerce", "Elementor"],
    },
    {
      icon: <FaSearch className="text-yellow-400 text-5xl" />,
      title: "SEO Optimization",
      description:
        "I help optimize your website content and structure for better visibility in search engines like Google.",
      technologies: ["On-page SEO", "Technical SEO", "Analytics"],
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-900 to-black text-white animate-fade-up"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <span className="text-sm uppercase tracking-wide text-cyan-400">
          What I Do
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Services I Offer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I help businesses grow their online presence by building fast,
          user-friendly websites, optimizing for all devices, and ensuring they
          rank well on search engines.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg 
                         hover:scale-105 transition-transform duration-300 
                         hover:bg-white/10 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
