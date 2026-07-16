"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 5200);
    return () => clearInterval(id);
  }, [paused, advance]);

  const current = testimonials[index];

  return (
    <section
      className="relative py-28 md:py-36 bg-ink text-paper overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-dark/20 blur-3xl" />

      <div className="container-edit relative">
        <Reveal>
          <p className="eyebrow text-brass-light mb-4 text-center">
            Kind words
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-center max-w-2xl mx-auto mb-16 md:mb-20 leading-[1.05]">
            From the people we&apos;ve built rooms for.
          </h2>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-5xl p-8 md:p-14 text-center !border-paper/15 !bg-paper/[0.07]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display italic text-xl md:text-2xl leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-paper/20">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-paper">{current.name}</p>
                    <p className="eyebrow text-paper/50">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Show testimonial from ${t.name}`}
                data-cursor-hover
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === index ? "w-8 bg-brass-light" : "w-1.5 bg-paper/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
