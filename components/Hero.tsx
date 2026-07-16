"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Amaranthine } from "@/components/botanicals/Bloom";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingPetals } from "@/components/FloatingPetals";

const headline = ["Flowers,", "considered."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.24]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink pt-32 pb-16 md:pb-20"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Soft-focus botanical study in the Amarante palette"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
        <div className="absolute inset-0 bg-ink/20" />
      </motion.div>

      <FloatingPetals count={8} className="z-[1]" seed={5} />

      {/* signature botanical line-art, drawn over the photograph */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="hidden lg:block absolute right-[6%] top-[8%] w-[280px] xl:w-[340px] z-[2]"
      >
        <Amaranthine className="w-full h-auto" delay={0.6} color="#F5F2E9" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-edit relative z-10 w-full"
      >
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="eyebrow text-brass-light mb-6"
            >
              Maison Amarante — Atelier Floral, Est. New York
            </motion.p>

            <h1 className="font-display font-light text-[13vw] sm:text-[10vw] lg:text-[6.4vw] leading-[0.95] tracking-tight text-paper">
              {headline.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1,
                      delay: 0.25 + i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`block ${i === 1 ? "font-display-italic text-sage-light" : ""}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-sm lg:ml-auto"
            >
              <p className="text-paper/75 text-base md:text-lg leading-relaxed mb-6">
                Sculptural arrangements built one stem at a time, sourced
                before sunrise and delivered the same morning they&apos;re cut.
              </p>
              <MagneticButton
                href="#collections"
                data-cursor-hover
                className="inline-flex items-center gap-3 rounded-full border border-paper/30 px-6 py-3.5 eyebrow text-paper hover:bg-paper hover:text-ink hover:border-paper transition-colors"
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
          className="mt-14 md:mt-20 h-px bg-gradient-to-r from-transparent via-paper/30 to-transparent"
        />

        <div className="mt-6 flex justify-between items-center">
          <span className="eyebrow text-paper/50">Scroll</span>
          <span className="eyebrow text-paper/50">No. 01 — The Manifesto</span>
        </div>
      </motion.div>
    </section>
  );
}
