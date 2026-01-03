import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="project" className="relative bg-[#030712] py-32 text-white">
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
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-[#26C3F4]">Projects</span>
        </h2>

        <p className="mt-4  opacity-70">A selection of my recent work</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
        {projects.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-white/60 text-sm tracking-wide uppercase">
              More coming soon
            </p>

            <div className="mx-auto mt-4 w-24 h-[2px] bg-[#26C3F4]/40 rounded-full" />
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
