import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import FloatingImage from "./FloatingImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Web Developer", "IoT Enthusiast", "Frontend Engineer in Progress"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#030712] text-white flex items-center"
    >
      <div className="container mx-auto flex flex-wrap items-center px-6">
        {/* TEXT */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl leading-relaxed">
            Hello,
            <br />
            <span className="text-5xl lg:text-6xl text-[#26C3F4] font-bold">
              I'm Ferry
            </span>
          </h2>

          {/* TYPING TEXT */}
          <h3 className="mt-4 text-xl lg:text-2xl font-medium">
            <span className="text-[#26C3F4]">{text}</span>
            <Cursor cursorStyle="|" />
          </h3>

          <p className="mt-6 opacity-80 max-w-xl">
            I enjoy building interactive web experiences and exploring smart
            technologies that shape the future.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#project"
              className="px-8 py-3 rounded-full border border-[#26C3F4]
                         hover:bg-[#26C3F4] hover:text-black transition"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="relative flex w-full lg:w-1/2 justify-center mt-12 lg:mt-0">
          {/* Glow besar */}
          <div className="absolute w-[420px] h-[420px] bg-[#26C3F4]/20 blur-[120px] rounded-full" />

          {/* Glow kecil (lebih terang) */}
          <div className="absolute w-[260px] h-[260px] bg-[#26C3F4]/30 blur-[80px] rounded-full" />

          <FloatingImage />
        </div>
      </div>
      <ScrollIndicator />;
    </section>
  );
}
