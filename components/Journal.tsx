"use client";

import { journal } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Journal() {
  return (
    <section id="journal" className="relative bg-paper py-28 md:py-36">
      <div className="container-edit">
        <Reveal>
          <div className="flex items-end justify-between mb-16 md:mb-20">
            <div>
              <p className="eyebrow text-brass mb-4">No. 05 — The Journal</p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02]">
                Notes from the atelier.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {journal.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <a href="#" className="group block">
                <div className="hairline mb-6" />
                <div className="flex items-center justify-between mb-4">
                  <span className="eyebrow text-sage-dark">{post.tag}</span>
                  <span className="eyebrow text-ink/40">{post.date}</span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-sage-dark transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="eyebrow text-ink/70 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read the note <span aria-hidden>→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
