import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -8 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className="
        relative cursor-pointer overflow-hidden rounded-xl
        bg-[#ffffff08] border border-white/10
      "
    >
      {/* IMAGE */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* OVERLAY */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          flex flex-col justify-end p-5
        "
      >
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm opacity-70 mt-1">Click to view details</p>
      </motion.div>
    </motion.div>
  );
}
