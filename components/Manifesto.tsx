"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Sprig } from "@/components/botanicals/Bloom";

export function Manifesto() {
  return (
    <section className="relative bg-paper py-28 md:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-brass mb-4">The Manifesto</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                We treat a stem the way an editor treats a sentence.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.15}>
              <p className="font-display italic text-2xl md:text-3xl leading-snug text-ink/80 mb-8">
                &ldquo;Cut what doesn&rsquo;t belong, and trust the rest to
                stand on its own.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="grid sm:grid-cols-2 gap-8 text-ink/70 leading-relaxed">
                <p>
                  Most florists build up. We build by taking away — starting
                  with more stems than any arrangement needs, and removing
                  until only the necessary ones remain.
                </p>
                <p>
                  The result looks less like a bouquet and more like a single
                  gesture: a bloom that seems to have arrived at its
                  container on its own, rather than been arranged into it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="mt-10">
              <Sprig className="w-24 h-8" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
