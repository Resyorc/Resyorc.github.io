import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        () => {
          setError(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-[#030712] py-32 text-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-[#26C3F4]">Me</span>
        </h2>

        <p className="mt-4 opacity-70">
          Feel free to reach out for collaboration or just a friendly hello 👋
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-transparent border focus:outline-none focus:border-[#26C3F4]"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-transparent border focus:outline-none focus:border-[#26C3F4]"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-transparent border focus:outline-none focus:border-[#26C3F4]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded border border-[#26C3F4] hover:bg-[#26C3F4] hover:text-black transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully ✅
            </p>
          )}

          {error && (
            <p className="text-red-400 text-center">
              Failed to send message ❌
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
