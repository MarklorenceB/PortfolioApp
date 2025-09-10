import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 md:text-left animate-fade-up">
          <span className="block text-sm text-gray-300 mb-2">
            Hi there! 👋 I'm
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Mark Lorence Beron
          </h1>
          <h4 className="text-lg md:text-xl font-semibold text-cyan-400 mb-6">
            Frontend | WordPress | Shopify Developer
          </h4>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl  md:mx-0">
            I’m a Front-End & WordPress Developer with a strong focus on
            creating responsive, user-friendly websites that look great on any
            device. I specialize in helping underrepresented communities and
            individuals establish their businesses and online presence, even
            with limited resources. While my mission is to support those who
            often face barriers to technology, I welcome and work with anyone in
            need of quality web development and design services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="border border-gray-400 hover:border-cyan-400 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end relative animate-float">
          <div className="relative">
            <img
              src="/images/mydp.png"
              alt="Mark Beron"
              className="w-48 h-48 md:w-80 md:h-102 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-4 py-2 rounded-xl shadow-lg text-center">
              <span className="block text-2xl font-bold">2+</span>
              <span className="text-xs uppercase tracking-wide">
                Years of <br /> Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
