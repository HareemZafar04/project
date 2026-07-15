"use client";

import { motion } from "framer-motion";
import { collections } from "@/lib/data";
import { Anemone } from "@/components/botanicals/Bloom";
import { Reveal } from "@/components/ui/Reveal";

const cardBg = ["bg-blush-light", "bg-sage-light", "bg-paper-dim", "bg-blush-light"];
const iconColor = ["#4A1F1F", "#5F7056", "#9C7A45", "#1B2420"];

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
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-4xl ${cardBg[i % cardBg.length]} p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden shadow-soft`}
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-ink/50">{item.id}</span>
                  <span className="font-display text-xl text-ink">{item.price}</span>
                </div>

                <div className="my-8 flex justify-center">
                  <Anemone
                    className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                    color={iconColor[i % iconColor.length]}
                  />
                </div>

                <div>
                  <p className="eyebrow text-ink/50 mb-2 italic font-display normal-case tracking-normal text-sm">
                    {item.latin}
                  </p>
                  <h3 className="font-display text-2xl text-ink mb-3">{item.name}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
