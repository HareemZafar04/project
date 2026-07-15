"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Amaranthine } from "@/components/botanicals/Bloom";

export function Editorial() {
  return (
    <section className="relative bg-paper py-28 md:py-40 overflow-hidden">
      <div className="container-edit">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-2 order-2 lg:order-1 flex lg:justify-start justify-center">
            <Reveal>
              <Amaranthine
                className="w-32 md:w-40 h-auto"
                color="#B99485"
                duration={2.6}
              />
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4 order-1 lg:order-2 text-right lg:text-left">
            <Reveal>
              <p className="eyebrow text-ink/40 mb-6">The Seasonal Edit</p>
              <blockquote className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.08] text-ink">
                Every flower in this house is chosen the same way you&rsquo;d
                choose a word for a first line —{" "}
                <span className="font-display-italic text-sage-dark">
                  slowly, and with the option to change it.
                </span>
              </blockquote>
              <p className="eyebrow text-ink/40 mt-8">
                — Founding note, Maison Amarante
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
