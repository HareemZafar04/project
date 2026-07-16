import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journal } from "@/lib/data";
import { Sprig } from "@/components/botanicals/Bloom";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function JournalPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = journal.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-40 pb-28 md:pb-36 bg-paper min-h-screen">
      <div className="container-edit max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow text-sage-dark">{post.tag}</span>
          <span className="eyebrow text-ink/40">{post.date}</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] mb-10">
          {post.title}
        </h1>

        <Sprig className="w-24 h-8 mb-10" />

        <div className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-ink/75 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="hairline my-16" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link
            href="/journal"
            data-cursor-hover
            className="eyebrow text-ink/60 hover:text-ink inline-flex items-center gap-2"
          >
            ← All notes
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/journal/${p.slug}`}
                data-cursor-hover
                className="eyebrow text-ink/50 hover:text-ink max-w-[220px]"
              >
                {p.title} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
