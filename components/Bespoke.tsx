"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Bespoke() {
  return (
    <section id="bespoke" className="relative py-28 md:py-36 bg-paper">
      <div className="container-edit">
        <div className="relative rounded-5xl overflow-hidden bg-sage-dark px-6 py-16 md:px-20 md:py-24">
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blush/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-paper/10 blur-3xl" />

          <div className="relative grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-paper/60 mb-4">No. 04 — Bespoke &amp; Events</p>
                <h2 className="font-display text-3xl md:text-5xl text-paper leading-[1.05] mb-6">
                  Weddings, installations, and rooms that need a florist for
                  the day, not the hour.
                </h2>
                <p className="text-paper/70 max-w-lg leading-relaxed">
                  We take on a small number of weddings and private events
                  each season, working directly with the space rather than
                  from a fixed package.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="glass rounded-4xl p-8 md:p-10 !bg-paper/15 !border-paper/25">
                  <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                    <label className="flex flex-col gap-2">
                      <span className="eyebrow text-paper/70">Name</span>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="bg-transparent border-b border-paper/30 pb-2 text-paper placeholder:text-paper/40 focus:outline-none focus:border-paper/70 transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="eyebrow text-paper/70">Occasion</span>
                      <input
                        type="text"
                        placeholder="Wedding, opening, installation…"
                        className="bg-transparent border-b border-paper/30 pb-2 text-paper placeholder:text-paper/40 focus:outline-none focus:border-paper/70 transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="eyebrow text-paper/70">Date</span>
                      <input
                        type="text"
                        placeholder="Approximate date"
                        className="bg-transparent border-b border-paper/30 pb-2 text-paper placeholder:text-paper/40 focus:outline-none focus:border-paper/70 transition-colors"
                      />
                    </label>
                    <MagneticButton
                      className="mt-3 inline-flex justify-center items-center gap-3 rounded-full bg-paper text-ink eyebrow px-6 py-3.5 hover:bg-blush-light transition-colors"
                    >
                      Request the atelier
                      <span aria-hidden>→</span>
                    </MagneticButton>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
