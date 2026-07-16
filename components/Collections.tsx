"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { collections, collectionImages } from "@/lib/data";
import { Anemone } from "@/components/botanicals/Bloom";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const iconColor = ["#F5F2E9", "#F5F2E9", "#F5F2E9", "#F5F2E9"];

export function Collections() {
  return (
    <section id="collections" className="relative bg-paper py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="eyebrow text-brass mb-4">No. 02 — The Collection</p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] max-w-xl">
                Four arrangements, <span className="font-display-italic">chosen</span> rather than catalogued.
              </h2>
            </div>
            <p className="text-ink/60 max-w-xs leading-relaxed">
              Our range changes with the season. These four hold their shape
              year round.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {collections.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <TiltCard maxTilt={6} className="group h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor-hover
                  className="relative rounded-4xl overflow-hidden h-full flex flex-col justify-end shadow-soft min-h-[420px]"
                >
                  <Image
                    src={collectionImages[item.id]}
                    alt={`${item.name} — ${item.latin}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />

                  <div className="relative z-10 flex items-start justify-between p-8 md:p-10">
                    <span className="eyebrow text-paper/60">{item.id}</span>
                    <span className="font-display text-xl text-paper">{item.price}</span>
                  </div>

                  <div className="relative z-10 flex justify-center -mt-4 mb-2 opacity-70">
                    <Anemone
                      className="w-24 h-24 md:w-28 md:h-28 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                      color={iconColor[i % iconColor.length]}
                    />
                  </div>

                  <div className="relative z-10 p-8 md:p-10 pt-0">
                    <p className="eyebrow text-paper/50 mb-2 italic font-display normal-case tracking-normal text-sm">
                      {item.latin}
                    </p>
                    <h3 className="font-display text-2xl text-paper mb-3">{item.name}</h3>
                    <p className="text-paper/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
