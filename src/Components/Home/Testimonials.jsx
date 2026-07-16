import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Reveal from "../Reveal";

// TODO: replace with real client quotes, names, and projects
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Mark took our outdated site and turned it into something we're genuinely proud to send clients to. He understood the business goal behind every page, not just the design.",
    name: "Sarah M.",
    role: "Real Estate Broker",
    project: "Real estate website",
  },
  {
    id: 2,
    quote:
      "Communication was effortless from kickoff to launch. He flagged problems before they became problems and shipped ahead of schedule — rare in this industry.",
    name: "James T.",
    role: "Startup Founder",
    project: "Storage booking site",
  },
  {
    id: 3,
    quote:
      "The finance platform he built replaced hours of manual spreadsheet work every month. Reports that used to take a full afternoon now generate themselves.",
    name: "Hazelyn C.",
    role: "Finance Head",
    project: "Finance web app",
  },
  {
    id: 4,
    quote:
      "We handed him a rough idea and got back a polished, fast WordPress site our whole team can update without touching code. Exactly what a small nonprofit needs.",
    name: "Rachel K.",
    role: "Program Director",
    project: "Nonprofit website",
  },
  {
    id: 5,
    quote:
      "Our store finally loads fast and looks premium on mobile, where most of our customers are. Conversions went up within the first month after relaunch.",
    name: "Liam O.",
    role: "E-commerce Owner",
    project: "Shopify storefront",
  },
];

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 48;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);
  const total = TESTIMONIALS.length;

  const goTo = (next) => setIndex(((next % total) + total) % total);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Autoplay — advances one slide per interval, restarts whenever the
  // index changes so manual navigation gets a full interval too.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, reducedMotion]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(
    total
  ).padStart(2, "0")}`;

  const controls = (
    <>
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous testimonial"
        className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next testimonial"
        className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
      >
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
      <span
        className="font-mono text-xs tracking-[0.18em] text-slate-400 ml-2"
        aria-live="polite"
      >
        {counter}
      </span>
    </>
  );

  return (
    <section id="testimonials" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Left rail — heading + desktop controls */}
          <Reveal variant="left" className="min-w-0">
            <span className="eyebrow">// client feedback</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
              What clients say
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Every project above shipped for a real client with a real
              deadline. Here's how working together felt from their side of
              the screen.
            </p>

            <div className="hidden lg:flex items-center gap-3">{controls}</div>

            {/* Autoplay progress */}
            <div
              className="hidden lg:block mt-6 h-px w-48 bg-white/10 overflow-hidden"
              aria-hidden="true"
            >
              {!reducedMotion && (
                <div
                  key={index}
                  className="testimonial-progress h-full bg-cyan-400/70"
                  style={{
                    animationDuration: `${AUTOPLAY_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </div>
          </Reveal>

          {/* Slider viewport */}
          <Reveal variant="right" className="min-w-0">
            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="testimonial-track flex"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial, slideIndex) => (
                  <figure
                    key={testimonial.id}
                    aria-hidden={slideIndex !== index}
                    className="w-full shrink-0 m-0 glass-card rounded-2xl relative overflow-hidden p-8 sm:p-10"
                  >
                    <Quote
                      className="absolute -top-6 -right-4 w-40 h-40 text-cyan-400/[0.06] rotate-12 pointer-events-none"
                      aria-hidden="true"
                      strokeWidth={1}
                    />

                    <blockquote className="relative m-0 mb-8">
                      <p className="font-display text-lg sm:text-xl leading-relaxed text-slate-200 m-0">
                        “{testimonial.quote}”
                      </p>
                    </blockquote>

                    <figcaption className="relative flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center font-display font-bold text-sm text-slate-950"
                          aria-hidden="true"
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-100 text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-slate-400 text-xs mt-0.5">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-cyan-300/80 tracking-wide">
                        ↳ {testimonial.project}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center justify-between mt-6">
              <div className="flex items-center gap-3">{controls}</div>
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((testimonial, dotIndex) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    role="tab"
                    aria-selected={dotIndex === index}
                    aria-label={`Testimonial ${dotIndex + 1}`}
                    onClick={() => goTo(dotIndex)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIndex === index
                        ? "w-6 bg-cyan-400"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
