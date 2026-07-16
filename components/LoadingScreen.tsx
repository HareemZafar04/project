"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Amaranthine } from "@/components/botanicals/Bloom";
import { useLenis } from "@/lib/providers/SmoothScrollProvider";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    lenis?.stop();

    let raf: number;
    const start = performance.now();
    const duration = 1900;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out-ish progress
      const eased = 1 - Math.pow(1 - t, 2);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      lenis?.start();
    }
  }, [done, lenis]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="flex flex-col items-center gap-6"
          >
            <Amaranthine className="w-24 h-32" duration={1.6} />
            <div className="eyebrow text-ink/50">Maison Amarante</div>
            <div className="w-40 h-px bg-ink/15 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brass"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-display italic text-2xl text-ink/70 tabular-nums">
              {progress}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
