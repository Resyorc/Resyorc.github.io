import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal Box */}
          <motion.div
            className="bg-[#030712] text-white max-w-lg w-full rounded-xl p-6 relative"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl hover:text-[#26C3F4]"
            >
              ✕
            </button>

            <motion.img
              src={project.image}
              alt={project.title}
              className="rounded mb-4"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            />

            <h2 className="text-2xl font-bold text-[#26C3F4]">
              {project.title}
            </h2>

            <p className="mt-2 opacity-80">{project.detail}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-sm border rounded-full border-[#26C3F4]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 border rounded hover:bg-[#26C3F4] hover:text-black transition"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border rounded hover:bg-[#26C3F4] hover:text-black transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
