"use client";

import { motion } from "framer-motion";
import { Amaranthine } from "@/components/botanicals/Bloom";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-paper pt-32 pb-16 md:pb-20"
    >
      {/* ambient soft blobs */}
      <div className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-sage/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-blush/30 blur-3xl" />

      {/* signature botanical, large, right side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="hidden lg:block absolute right-[6%] top-[8%] w-[280px] xl:w-[340px]"
      >
        <Amaranthine className="w-full h-auto" delay={0.6} />
      </motion.div>

      <div className="container-edit relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="eyebrow text-brass mb-6"
            >
              Maison Amarante — Atelier Floral, Est. New York
            </motion.p>

            <h1 className="font-display font-light text-[13vw] sm:text-[10vw] lg:text-[6.4vw] leading-[0.95] tracking-tight text-ink">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Flowers,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display-italic text-sage-dark"
              >
                considered.
              </motion.span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-sm lg:ml-auto"
            >
              <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-6">
                Sculptural arrangements built one stem at a time, sourced
                before sunrise and delivered the same morning they&apos;re cut.
              </p>
              <MagneticButton
                href="#collections"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 eyebrow text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors"
              >
                View the Collection
                <span aria-hidden>→</span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="hairline mt-14 md:mt-20"
        />

        <div className="mt-6 flex justify-between items-center">
          <span className="eyebrow text-ink/50">Scroll</span>
          <span className="eyebrow text-ink/50">No. 01 — The Manifesto</span>
        </div>
      </div>
    </section>
  );
}
