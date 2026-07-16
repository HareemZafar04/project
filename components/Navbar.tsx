"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/data";
import { useTheme } from "@/lib/providers/ThemeProvider";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      data-cursor-hover
      aria-label="Toggle dark mode"
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-ink/70 hover:text-ink transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className="text-base leading-none"
        >
          {theme === "dark" ? "☾" : "☀"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 md:pt-6"
    >
      <nav
        className={`glass flex items-center justify-between gap-6 rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
          scrolled ? "shadow-glass w-[92%] md:w-auto" : "w-[92%] md:w-auto"
        }`}
      >
        <a
          href="/"
          data-cursor-hover
          className="font-display italic text-lg md:text-xl tracking-tight text-ink whitespace-nowrap"
        >
          Amarante
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor-hover
              className="eyebrow text-ink/70 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/#bespoke"
            data-cursor-hover
            className="hidden md:inline-flex items-center rounded-full bg-ink text-paper eyebrow px-5 py-2.5 hover:bg-ink-soft transition-colors"
          >
            Enquire
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass absolute top-20 w-[92%] rounded-3xl p-6 flex flex-col gap-5 md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#bespoke"
              onClick={() => setOpen(false)}
              className="eyebrow text-paper bg-ink rounded-full px-5 py-3 text-center"
            >
              Enquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
