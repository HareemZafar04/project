"use client";

import { process } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="atelier" className="relative bg-ink text-paper py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <p className="eyebrow text-brass-light mb-4">No. 03 — The Atelier</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] max-w-2xl mb-16 md:mb-20">
            Four steps, always in the <span className="font-display-italic">same order.</span>
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {process.map((p) => (
            <RevealItem key={p.step} className="border-t border-paper/20 pt-6">
              <span className="font-display italic text-3xl text-brass-light">
                {p.step}
              </span>
              <h3 className="font-display text-xl mt-4 mb-3">{p.title}</h3>
              <p className="text-paper/60 text-sm leading-relaxed">{p.copy}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
