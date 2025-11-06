import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      role: "Web Developer Intern",
      company: "Frontline Business Solution",
      period: "Mar – Jul 2022",
      details: [
        "Web Design and Layout using Figma",
        "Developing websites using HTML, CSS, JavaScript, jQuery",
        "Responsive web design & SASS",
        "Converting HTML websites to WordPress",
      ],
    },
    {
      role: "Freelance WordPress Developer",
      company: "24Task Agency",
      period: "Feb – Sept 2023",
      details: [
        "WordPress Elementor & WooCommerce",
        "Speed optimization & SEO",
        "Mobile responsiveness",
      ],
    },
    {
      role: "Frontend | WordPress Developer",
      company: "Brave Egg Internet Ideas, OPC",
      period: "Mar 2023 – Feb 2024",
      details: [
        "Converting HTML Website to WordPress",
        "WordPress Elementor & WooCommerce",
        "Advanced Custom Fields (ACF)",
        "Custom Post Type (CPT)",
        "Performance optimization & mobile responsiveness",
        "Shopify development",
      ],
    },

    {
      role: "Frontend Developer",
      company: "Customer Benefits Svcs Inc",
      period: "Mar 2024 – Jul 2025",
      details: [
        "Developed responsive, modern websites using React.js and Next.js, integrating dynamic UI components and state management.",
        "Built and maintained pages using HTML, CSS, JavaScript, and jQuery with strong focus on browser compatibility and accessibility.",
        "Ensured mobile responsiveness across various devices and screen sizes using modern layout techniques (Flexbox, Grid, and media queries).",
        "Performed speed optimization by minimizing render-blocking resources, optimizing assets, and implementing lazy loading.",
        "Gained foundational understanding of ASP.NET Framework / ASP.NET Core for backend integration and deployment processes.",
        "Applied Razor syntax to combine C# logic with HTML in dynamic server-side rendered views.",
        "Collaborated with backend developers and designers to enhance UI/UX and maintain code consistency across the application.sss",
      ],
    },
  ];

  const education = [
    {
      period: "2016 – 2018",
      title: "Information Technology",
      school: "ACLC San Pablo City",
    },
    {
      period: "2018 – 2022",
      title: "Bachelor of Science in Information Technology",
      school: "Laguna State Polytechnic University",
    },
  ];

  const certificates = [
    {
      period: "Jul – Aug 2023",
      title: "Web Development for Web Developers",
      org: "DICT - Region IV-A",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Work Experience */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-cyan-400" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 rounded-xl shadow hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">
                  {job.role}{" "}
                  <span className="text-cyan-400">| {job.company}</span>
                </h3>
                <p className="text-sm text-gray-400 mb-2">{job.period}</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Certificates */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 rounded-lg shadow hover:bg-white/10 transition"
              >
                <p className="text-xs text-gray-400">{edu.period}</p>
                <h4 className="text-[14px] font-semibold">{edu.title}</h4>
                <p className="text-sm text-gray-400">{edu.school}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            Certificates
          </h2>
          <div className="space-y-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 rounded-lg shadow hover:bg-white/10 transition"
              >
                <p className="text-sm text-gray-400">{cert.period}</p>
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-sm text-gray-300">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
