"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-ink text-paper pt-24 pb-10">
      <div className="container-edit">
        <Reveal>
          <div className="grid grid-cols-12 gap-8 pb-16 border-b border-paper/15">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-display italic text-3xl md:text-4xl mb-6">
                Amarante
              </p>
              <p className="text-paper/60 max-w-sm leading-relaxed">
                An atelier of considered flowers. New arrangements every
                Tuesday and Friday morning.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:flex lg:justify-end">
              <form
                className="w-full max-w-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <span className="eyebrow text-paper/50 block mb-3">
                  Join the seasonal list
                </span>
                <div className="flex items-center gap-3 border-b border-paper/30 pb-3 focus-within:border-paper/70 transition-colors">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent placeholder:text-paper/40 focus:outline-none"
                  />
                  <MagneticButton className="eyebrow text-paper/90 hover:text-brass-light transition-colors">
                    Subscribe →
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </Reveal>

        <div className="pt-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="eyebrow text-paper/50 hover:text-paper transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="eyebrow text-paper/40">
            © {new Date().getFullYear()} Maison Amarante. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
