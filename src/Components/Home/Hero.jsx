import React from "react";
import { ArrowRight, Code2, Gauge, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  "React",
  "Next.js",
  "WordPress",
  "Headless WordPress",
  "CMS",
  "SEO",
  "Playable Ads",
  "Phaser",
  "Framer Motion",
  "AI-Assisted Development",
];

const STATS = [
  { value: "4+", label: "Years of experience" },
  { value: "15+", label: "Projects shipped" },
  { value: "4+", label: "Countries served" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-backdrop absolute inset-0" />
        <div className="aurora w-[34rem] h-[34rem] bg-cyan-500/40 -top-40 -left-32" />
        <div
          className="aurora w-[28rem] h-[28rem] bg-blue-600/30 top-1/3 -right-24"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="aurora w-[22rem] h-[22rem] bg-indigo-500/20 bottom-0 left-1/3"
          style={{ animationDelay: "-11s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-10">
          {/* Left: copy */}
          <div className="flex-1 lg:flex-[1.2] text-center lg:text-left">
            <div
              className="hero-rise inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-6"
              style={{ "--d": "0ms" }}
            >
              <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-wider text-slate-300">
                Available for new projects
              </span>
            </div>

            <p
              className="hero-rise text-slate-400 mb-3"
              style={{ "--d": "80ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-slate-100 font-semibold">
                Mark Lorence Beron
              </span>
            </p>

            <h1
              className="hero-rise font-display text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-bold leading-[1.15] tracking-tight mb-6 max-w-2xl mx-auto lg:mx-0"
              style={{ "--d": "160ms" }}
            >
              <span className="text-gradient">Full-Stack Web Developer</span>{" "}
              <span className="text-slate-100">
                building modern websites, web apps, playable experiences &amp;
                AI-powered digital systems.
              </span>
            </h1>

            <p
              className="hero-rise text-slate-400 leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
              style={{ "--d": "240ms" }}
            >
              With 4+ years of experience, I design and build fast, responsive,
              SEO-friendly websites and web applications — from WordPress and
              Headless WordPress builds to CMS-powered platforms and Next.js
              products, plus playable ads and interactive experiences. I&apos;m
              passionate about helping businesses and underrepresented
              communities establish a strong, professional online presence.
            </p>

            {/* Tech highlight chips */}
            <ul
              className="hero-rise flex flex-wrap gap-2 justify-center lg:justify-start mb-9 list-none p-0"
              style={{ "--d": "320ms" }}
            >
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs text-cyan-300/90 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div
              className="hero-rise flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              style={{ "--d": "400ms" }}
            >
              <a href="#projects" className="btn-primary no-underline">
                View Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary no-underline">
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <dl
              className="hero-rise grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-800 pt-6"
              style={{ "--d": "480ms" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl font-bold text-slate-100 m-0">
                    {stat.value}
                  </dd>
                  <p className="text-xs text-slate-500 mt-1 mb-0">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: portrait + floating proof cards */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="hero-pop relative" style={{ "--d": "200ms" }}>
              {/* Glow ring behind portrait */}
              <div
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-indigo-500/25 blur-2xl"
                aria-hidden="true"
              />

              <img
                src="/images/mydp.png"
                alt="Portrait of Mark Lorence Beron"
                width="320"
                height="320"
                fetchPriority="high"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-cyan-400/60 shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)]"
              />

              {/* Floating card: stack */}
              <div
                className="float-soft absolute -top-8 -left-6 sm:-top-6 sm:-left-16 proof-card rounded-xl px-4 py-3"
                style={{ "--float-d": "0s" }}
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <div className="font-mono text-xs text-slate-300 leading-5">
                    Next.js · React
                    <span className="block text-slate-500">
                      Headless WordPress
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating card: performance */}
              <div
                className="float-soft hidden sm:block absolute top-1/2 -right-8 sm:-right-16 proof-card rounded-xl px-4 py-3"
                style={{ "--float-d": "-2s" }}
              >
                <div className="flex items-center gap-2.5">
                  <Gauge
                    className="w-4 h-4 text-emerald-400"
                    aria-hidden="true"
                  />
                  <div className="font-mono text-xs text-slate-300 leading-5">
                    SEO-ready
                    <span className="block text-slate-500">
                      Fast &amp; responsive
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating card: AI workflow */}
              <div
                className="float-soft hidden sm:block absolute -bottom-6 -left-6 sm:-left-12 proof-card rounded-xl px-4 py-3"
                style={{ "--float-d": "-4s" }}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles
                    className="w-4 h-4 text-indigo-300"
                    aria-hidden="true"
                  />
                  <div className="font-mono text-xs text-slate-300 leading-5">
                    AI-assisted
                    <span className="block text-slate-500">workflows</span>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-gradient-to-tr from-cyan-500 to-sky-400 text-slate-950 px-4 py-2.5 rounded-xl shadow-lg text-center">
                <span className="block font-display text-xl font-bold leading-none">
                  4+
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide">
                  Years exp.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors hidden md:block"
      >
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="20"
            height="32"
            rx="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="11" cy="10" r="3" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
