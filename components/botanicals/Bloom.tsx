"use client";

import { motion } from "framer-motion";

type BloomProps = {
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
};

/**
 * Amaranthine — a single-line spray of an amaranth bloom with trailing
 * leaves. This is the site's signature device: a hand-drafted botanical
 * line that draws itself in as it enters the viewport.
 */
export function Amaranthine({
  className,
  color = "#1B2420",
  duration = 2.2,
  delay = 0,
}: BloomProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration, delay: delay + i * 0.25, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: 0.3, delay: delay + i * 0.25 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 400 560"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* stem */}
      <motion.path
        d="M200 540 C 196 460, 210 380, 198 300 C 190 240, 205 200, 200 140"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={0}
        variants={draw}
      />
      {/* trailing amaranth plume, drooping */}
      <motion.path
        d="M200 140 C 220 150, 235 175, 232 205 C 230 230, 214 245, 210 270 C 206 292, 218 305, 214 325 C 210 345, 194 352, 196 372"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        custom={0.6}
        variants={draw}
      />
      <motion.path
        d="M200 140 C 180 150, 168 176, 172 204 C 174 228, 190 242, 186 266 C 183 288, 170 300, 176 320"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        custom={0.8}
        variants={draw}
      />
      {/* leaf left */}
      <motion.path
        d="M198 300 C 160 292, 130 302, 108 330 C 128 328, 152 320, 172 322"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        custom={1.1}
        variants={draw}
      />
      {/* leaf right */}
      <motion.path
        d="M203 360 C 240 356, 268 372, 284 402 C 262 396, 238 384, 216 390"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        custom={1.3}
        variants={draw}
      />
      {/* small bud accent */}
      <motion.path
        d="M200 140 C 194 122, 198 104, 200 88 C 202 104, 210 118, 200 140 Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        custom={0.2}
        variants={draw}
      />
    </motion.svg>
  );
}

/**
 * Anemone — an open five-petal bloom on a slender stem, used at smaller
 * sizes throughout (collection cards, dividers).
 */
export function Anemone({
  className,
  color = "#1B2420",
  duration = 1.8,
  delay = 0,
}: BloomProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration, delay: delay + i * 0.18, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: 0.3, delay: delay + i * 0.18 },
      },
    }),
  };

  const petals = [
    "M120 60 C 96 44, 66 48, 56 74 C 50 92, 62 108, 84 112 C 78 92, 92 70, 120 60 Z",
    "M120 60 C 148 46, 178 54, 186 80 C 191 98, 178 112, 156 114 C 164 94, 150 72, 120 60 Z",
    "M120 60 C 108 34, 114 6, 138 -6 C 154 2, 154 24, 140 40 C 132 46, 126 52, 120 60 Z",
    "M120 60 C 98 78, 92 106, 108 128 C 122 118, 132 96, 132 70 C 128 66, 124 62, 120 60 Z",
    "M120 60 C 142 76, 150 104, 136 128 C 120 118, 110 94, 112 70 C 114 66, 117 63, 120 60 Z",
  ];

  return (
    <motion.svg
      viewBox="-10 -20 220 220"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {petals.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={i}
          variants={draw}
        />
      ))}
      <motion.circle
        cx="120"
        cy="60"
        r="7"
        stroke={color}
        strokeWidth="1.4"
        custom={petals.length}
        variants={draw}
      />
      <motion.path
        d="M120 128 C 122 160, 116 190, 122 216"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        custom={petals.length + 0.5}
        variants={draw}
      />
    </motion.svg>
  );
}

/**
 * Sprig — a minimal three-leaf stem used as a small divider / accent mark.
 */
export function Sprig({
  className,
  color = "#9C7A45",
  duration = 1.2,
  delay = 0,
}: BloomProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration, delay: delay + i * 0.15, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: 0.25, delay: delay + i * 0.15 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 120 40"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.path d="M4 20 H116" stroke={color} strokeWidth="1" custom={0} variants={draw} />
      <motion.path
        d="M50 20 C 56 12, 66 12, 70 20 C 66 16, 56 16, 50 20 Z"
        stroke={color}
        strokeWidth="1.2"
        custom={1}
        variants={draw}
      />
      <motion.path
        d="M50 20 C 56 28, 66 28, 70 20 C 66 24, 56 24, 50 20 Z"
        stroke={color}
        strokeWidth="1.2"
        custom={1.3}
        variants={draw}
      />
    </motion.svg>
  );
}
