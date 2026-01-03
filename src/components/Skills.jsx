import { motion } from "framer-motion";
import { skills } from "../data/skills";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#030712] text-white">
      {/* Scroll Divider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-x-0 top-12 flex justify-center"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-[2px] bg-[#26C3F4]/40" />
          <div className="w-2 h-2 rounded-full bg-[#26C3F4]/60" />
          <div className="w-10 h-[2px] bg-[#26C3F4]/40" />
        </div>
      </motion.div>
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold"
        >
          My <span className="text-[#26C3F4]">Skills</span>
        </motion.h2>

        <p className="mt-4 opacity-70 max-w-xl">
          Technologies and tools I use and continue to improve.
        </p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(38,195,244,0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl bg-[#ffffff08] border border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold text-[#26C3F4] mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-4 py-2 text-sm rounded-full
                               bg-[#26C3F4]/10 text-[#26C3F4]
                               border border-[#26C3F4]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
