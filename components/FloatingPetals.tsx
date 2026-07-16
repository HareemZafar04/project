"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Petal = {
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  color: string;
  rotate: number;
};

function makePetals(count: number, seed = 1): Petal[] {
  const colors = ["#9C7A45", "#8FA084", "#D9BFB4"];
  let s = seed;
  function rnd() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  }
  return Array.from({ length: count }).map((_, i) => ({
    x: rnd() * 100,
    y: rnd() * 100,
    scale: 0.5 + rnd() * 0.9,
    duration: 8 + rnd() * 10,
    delay: rnd() * 4,
    color: colors[i % colors.length],
    rotate: rnd() * 360,
  }));
}

export function FloatingPetals({
  count = 7,
  className = "",
  seed = 3,
}: {
  count?: number;
  className?: string;
  seed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const petals = useRef(makePetals(count, seed)).current;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const els = containerRef.current.querySelectorAll<HTMLElement>(
      "[data-petal]"
    );
    const tweens: gsap.core.Tween[] = [];

    els.forEach((el, i) => {
      const p = petals[i];
      const tween = gsap.to(el, {
        y: "-=28",
        x: `+=${(i % 2 === 0 ? 1 : -1) * 14}`,
        rotate: `+=${p.rotate > 180 ? 25 : -25}`,
        duration: p.duration,
        delay: p.delay,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, [petals]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p, i) => (
        <svg
          key={i}
          data-petal
          className="floating-petal"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 22 * p.scale,
            height: 22 * p.scale,
            transform: `rotate(${p.rotate}deg)`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C12 8 18 8 18 12C18 16 12 16 12 22C12 16 6 16 6 12C6 8 12 8 12 2Z"
            stroke={p.color}
            strokeWidth="1.1"
          />
        </svg>
      ))}
    </div>
  );
}
