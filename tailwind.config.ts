import type { Config } from "tailwindcss";

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: withOpacity("--color-ink"),
          soft: withOpacity("--color-ink-soft"),
        },
        paper: {
          DEFAULT: withOpacity("--color-paper"),
          dim: withOpacity("--color-paper-dim"),
        },
        sage: {
          DEFAULT: withOpacity("--color-sage"),
          light: withOpacity("--color-sage-light"),
          dark: withOpacity("--color-sage-dark"),
        },
        blush: {
          DEFAULT: withOpacity("--color-blush"),
          light: withOpacity("--color-blush-light"),
          dark: withOpacity("--color-blush-dark"),
        },
        brass: {
          DEFAULT: withOpacity("--color-brass"),
          light: withOpacity("--color-brass-light"),
        },
        wine: {
          DEFAULT: withOpacity("--color-wine"),
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(27, 36, 32, 0.25)",
        glass: "0 8px 32px rgba(27, 36, 32, 0.12)",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
