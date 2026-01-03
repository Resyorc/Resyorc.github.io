import { motion } from "framer-motion";
import heroImg from "../assets/img/about-image.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="about"
      className="
        relative w-full py-32 text-white
        bg-gradient-to-b from-[#020617] via-[#030712] to-[#020617]
      "
    >
      <div className="container mx-auto flex flex-wrap items-center px-6 relative z-10">
        {/* IMAGE */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute w-[360px] h-[360px] bg-[#26C3F4]/20 blur-[100px] rounded-full" />

          <motion.img
            src={heroImg}
            alt="About Ferry"
            className="
    relative z-10
    w-[260px]
    sm:w-[320px]
    md:w-[400px]
    lg:w-[460px]
    xl:w-[520px]
    drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]
  "
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2 variants={item} className="text-4xl lg:text-5xl font-bold">
            About <span className="text-[#26C3F4]">Me</span>
          </motion.h2>

          {/* Accent */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 mt-2 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#26C3F4]" />
            <span className="uppercase tracking-widest text-sm opacity-60">
              Who I Am
            </span>
          </motion.div>

          {/* Highlight sentence */}
          <motion.p
            variants={item}
            className="text-xl font-medium text-[#26C3F4] max-w-xl"
          >
            I love building things that live between the web and the real world.
          </motion.p>

          {/* Paragraph 1 */}
          <motion.p
            variants={item}
            className="mt-4 text-lg leading-relaxed opacity-80 max-w-xl"
          >
            I’m a frontend-focused developer who enjoys crafting clean,
            interactive interfaces while exploring how web technologies connect
            with real-world devices through IoT.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={item}
            className="mt-4 text-lg leading-relaxed opacity-80 max-w-xl"
          >
            Currently, I’m deepening my skills in React and modern frontend
            tools, while continuously learning about IoT systems and smart
            technologies.
          </motion.p>

          {/* SOCIAL MEDIA */}
          <motion.div variants={item} className="flex items-center gap-6 mt-8">
            <span className="sr-only">Instagram</span>
            <a
              href="https://www.instagram.com/ferry_oktrnsyh/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="
      text-white/70 text-2xl
      transition-all duration-300
      hover:text-[#26C3F4]
      hover:-translate-y-1
      hover:drop-shadow-[0_0_10px_rgba(38,195,244,0.6)]
    "
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/Resyorc"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
      text-white/70 text-2xl
      transition-all duration-300
      hover:text-[#26C3F4]
      hover:-translate-y-1
      hover:drop-shadow-[0_0_10px_rgba(38,195,244,0.6)]
    "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ferry-oktariansyah-065a42346/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
      text-white/70 text-2xl
      transition-all duration-300
      hover:text-[#26C3F4]
      hover:-translate-y-1
      hover:drop-shadow-[0_0_10px_rgba(38,195,244,0.6)]
    "
            >
              <FaLinkedin />
            </a>
          </motion.div>

          {/* CTA LET'S CONNECT */}
          <motion.div variants={item} className="mt-6">
            <a
              href="#contact"
              className="
      inline-flex items-center gap-2
      text-sm font-medium text-[#26C3F4]
      opacity-80
      transition-all duration-300
      hover:opacity-100
      hover:gap-3
    "
            >
              Let’s connect
              <span className="transition-transform duration-300">→</span>
            </a>
          </motion.div>

          {/* Tags */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
            {["Frontend Focused", "React", "IoT Curious", "Problem Solver"].map(
              (itemText) => (
                <span
                  key={itemText}
                  className="
            px-4 py-2 text-sm rounded-full
            border border-[#26C3F4]/50
            text-[#26C3F4]
          "
                >
                  {itemText}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Optional noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/noise.png')]" />
    </section>
  );
}
