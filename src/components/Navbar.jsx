import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SECTIONS = ["home", "about", "skills", "project", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const refs = useRef({});

  // SCROLL SPY
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 z-[999] w-full bg-[#030712]/80 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="#home" className="text-2xl font-bold text-white">
          My Portfolio
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden border border-[#26C3F4] p-2 rounded text-white"
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <div className="relative hidden lg:block">
          <div className="relative flex gap-6 text-lg font-semibold">
            {/* SLIDING INDICATOR */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute bottom-0 h-[2px] bg-[#26C3F4]"
              style={{
                left: refs.current[active]?.offsetLeft ?? 0,
                width: refs.current[active]?.offsetWidth ?? 0,
              }}
            />

            {SECTIONS.map((item) => (
              <a
                key={item}
                ref={(el) => (refs.current[item] = el)}
                href={`#${item}`}
                className={`px-4 py-2 transition ${
                  active === item
                    ? "text-[#26C3F4]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              className="fixed top-0 right-0 z-[999] h-full w-72 bg-[#030712] px-6 py-6 text-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-medium">
                {SECTIONS.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 ${
                      active === item
                        ? "text-[#26C3F4] font-semibold"
                        : "text-white/80"
                    }`}
                  >
                    {active === item && (
                      <span className="w-1 h-6 bg-[#26C3F4] rounded-full" />
                    )}
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
