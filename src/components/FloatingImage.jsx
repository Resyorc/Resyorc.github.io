import { motion } from "framer-motion";
import heroImg from "../assets/img/hero-image.png";

export default function FloatingImage() {
  return (
    <motion.img
      src={heroImg}
      alt="Ferry illustration"
      className="
        relative z-10
        w-[280px]
        sm:w-[340px]
        md:w-[420px]
        lg:w-[520px]
        xl:w-[580px]
        drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
      "
      animate={{ y: [0, -18, 0], scale: [1, 1.02, 1] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
