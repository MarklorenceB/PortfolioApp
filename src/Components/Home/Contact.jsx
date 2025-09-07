import React, { useRef, useState } from "react";

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
      const response = await window.emailjs.send(
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

      console.log("Success:", response);
      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-lg font-medium">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mt-2">Let’s Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            I'm currently available for freelance work. Drop me a line if you'd
            like to discuss any opportunities!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  ✉️
                </div>
                <h3 className="text-lg font-semibold">Email Me</h3>
              </div>
              <p className="text-gray-300">marklorenceberon06@gmail.com</p>
              <a
                href="mailto:marklorenceberon06@gmail.com"
                className="text-cyan-400 hover:underline text-sm"
              >
                Send Email →
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  📍
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">San Pablo City, Laguna</p>
              <p className="text-gray-400 text-sm">Available for remote work</p>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  🌐
                </div>
                <h3 className="text-lg font-semibold">Social Media</h3>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mark-lorence-beron-bba8a8221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MarklorenceB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg animate-fade-up">
            <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
            <p className="text-gray-400 mb-6">
              I'll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none mb-4"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none mb-3"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="text-green-400 text-sm mt-2">
                  ✅ Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-sm mt-2">
                  ❌ Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
