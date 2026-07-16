"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + gallery.length) % gallery.length
      ),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <section id="gallery" className="relative bg-paper-dim py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <p className="eyebrow text-brass mb-4">No. 03 — The Gallery</p>
            <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] max-w-2xl">
              A working record, <span className="font-display-italic">not a portfolio.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[180px] [&>*:nth-child(3n+1)]:row-span-2">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.06} y={16} className="h-full">
              <button
                type="button"
                data-cursor-hover
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full h-full min-h-[160px] rounded-3xl overflow-hidden shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                aria-label={`Open image: ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="eyebrow text-paper">{item.caption}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center p-6 md:p-16"
            onClick={close}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={close}
              data-cursor-hover
              className="absolute top-6 right-6 md:top-10 md:right-10 eyebrow text-paper/70 hover:text-paper"
              aria-label="Close gallery"
            >
              Close ✕
            </motion.button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              data-cursor-hover
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 eyebrow text-paper/60 hover:text-paper p-3"
              aria-label="Previous image"
            >
              ←
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].caption}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
                <span className="eyebrow text-paper">
                  {gallery[activeIndex].caption}
                </span>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              data-cursor-hover
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 eyebrow text-paper/60 hover:text-paper p-3"
              aria-label="Next image"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
