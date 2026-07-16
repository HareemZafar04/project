import type { Metadata } from "next";
import Link from "next/link";
import { journal } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Field notes, seasonal updates, and atelier notes from Maison Amarante.",
};

export default function JournalIndexPage() {
  return (
    <div className="pt-40 pb-28 md:pb-36 bg-paper min-h-screen">
      <div className="container-edit">
        <p className="eyebrow text-brass mb-4">The Journal</p>
        <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.02] max-w-3xl mb-16 md:mb-24">
          Notes from the atelier, <span className="font-display-italic">in full.</span>
        </h1>

        <div className="flex flex-col">
          {journal.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              data-cursor-hover
              className="group border-t border-ink/10 last:border-b py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-3 md:gap-10"
            >
              <span className="eyebrow text-ink/40 md:w-24 shrink-0">
                {post.date}
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-ink group-hover:text-sage-dark transition-colors flex-1">
                {post.title}
              </h2>
              <span className="eyebrow text-sage-dark shrink-0">{post.tag}</span>
              <span
                aria-hidden
                className="eyebrow text-ink/50 group-hover:translate-x-1 transition-transform hidden md:inline"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/"
            data-cursor-hover
            className="eyebrow text-ink/60 hover:text-ink inline-flex items-center gap-2"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
