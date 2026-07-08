import React, { useRef, useState } from "react";
import { Mail, MapPin, Globe, Send, Loader2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "../Reveal";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60 focus:bg-white/[0.07] outline-none transition-colors";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      await window.emailjs.send(
        "service_m86gsx6",
        "template_h25tf7h",
        {
          from_name: formData.get("from_name"),
          from_email: formData.get("from_email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          to_name: "Mark Lorence",
          reply_to: formData.get("from_email"),
        },
        "public_CUCb8LVmKxrrkNpzJ"
      );

      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell relative py-24">
      <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />

      {/* Ambient glow */}
      <div
        className="aurora w-96 h-96 bg-cyan-500/25 bottom-0 -right-32"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="eyebrow">// get in touch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-100">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects and full-time
            opportunities. Tell me about your project and I&apos;ll get back to
            you within 24 hours.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-5">
            <Reveal
              variant="left"
              className="glass-card glass-card-hover p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-100 m-0">
                  Email
                </h3>
              </div>
              <a
                href="mailto:marklorenceberon06@gmail.com"
                className="text-slate-300 hover:text-cyan-300 transition-colors text-sm break-all no-underline"
              >
                marklorenceberon06@gmail.com
              </a>
            </Reveal>

            <Reveal
              variant="left"
              delay={100}
              className="glass-card glass-card-hover p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-100 m-0">
                  Location
                </h3>
              </div>
              <p className="text-slate-300 text-sm m-0">
                San Pablo City, Laguna, Philippines
              </p>
              <p className="text-slate-500 text-sm mt-1 mb-0">
                Available for remote work worldwide
              </p>
            </Reveal>

            <Reveal
              variant="left"
              delay={200}
              className="glass-card glass-card-hover p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                  <Globe className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-100 m-0">
                  Social
                </h3>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/mark-lorence-beron-bba8a8221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mark Lorence Beron on LinkedIn"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:text-cyan-300 hover:border-cyan-500/40 transition-colors no-underline"
                >
                  <FiLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href="https://github.com/MarklorenceB"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mark Lorence Beron on GitHub"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:text-cyan-300 hover:border-cyan-500/40 transition-colors no-underline"
                >
                  <FiGithub aria-hidden="true" /> GitHub
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal
            variant="right"
            className="md:col-span-3 glass-card p-8 rounded-2xl"
          >
            <h3 className="font-display text-xl font-semibold mb-1 text-slate-100">
              Send Me a Message
            </h3>
            <p className="text-slate-400 text-sm mb-7">
              I&apos;ll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm text-slate-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm text-slate-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm text-slate-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className={INPUT_CLASS}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      className="w-4 h-4 animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {submitStatus === "success" && (
                  <p className="text-emerald-400 text-sm m-0">
                    Message sent successfully — I&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm m-0">
                    Something went wrong. Please try again, or email me
                    directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
