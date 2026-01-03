import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-xs tracking-widest mb-2 uppercase">Scroll</span>

      <div className="w-[2px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
    </motion.div>
  );
}
