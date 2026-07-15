# Maison Amarante — Atelier Floral

A luxury florist brand site built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires an internet connection on first build (Next.js fetches the Fraunces and Instrument Sans font files from Google Fonts and self-hosts them).

```bash
npm run build
npm start
```

## Design direction

- **Palette** — ink (#1B2420), paper/linen ivory (#F5F2E9), sage (#8FA084), blush (#D9BFB4), antique brass (#9C7A45), wine (#4A1F1F). Deliberately avoids the generic cream + terracotta pairing in favor of a botanical green/blush/brass story.
- **Type** — Fraunces (a wonky, optical-size display serif, used in italic for accent phrases) paired with Instrument Sans for body and a tracked-uppercase "eyebrow" style for labels.
- **Signature element** — hand-drafted single-line botanical illustrations (`components/botanicals/Bloom.tsx`) that draw themselves on scroll using Framer Motion `pathLength` animation. Used in place of stock photography throughout.
- **Layout** — asymmetric editorial grid (12-column), magazine-style pull quotes, generous whitespace, glassmorphic floating nav and CTA card.

## Structure

```
app/
  layout.tsx      — fonts + metadata
  page.tsx        — section composition
  globals.css     — tokens, glass utility, focus states, reduced-motion
components/
  Navbar.tsx, Hero.tsx, Manifesto.tsx, Collections.tsx,
  Process.tsx, Editorial.tsx, Bespoke.tsx, Journal.tsx, Footer.tsx
  botanicals/Bloom.tsx   — signature line-art SVGs
  ui/Reveal.tsx          — scroll-reveal primitives
  ui/MagneticButton.tsx  — magnetic hover interaction
lib/data.ts       — collection, process, journal, nav content
```

## Notes for going further

- Replace the placeholder copy in `lib/data.ts` with real product/pricing data.
- The line-art botanicals are original SVG paths — swap in real photography behind them once you have shoots, or keep them as the brand's signature graphic device.
- Add a checkout/cart flow (e.g. Stripe) if the collection grid should become purchasable.
- `components/Bespoke.tsx`'s form is presentational only — wire it to an email/CRM endpoint before launch.
