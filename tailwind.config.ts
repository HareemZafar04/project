import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B2420",
          soft: "#2C362F",
        },
        paper: {
          DEFAULT: "#F5F2E9",
          dim: "#EDE8DA",
        },
        sage: {
          DEFAULT: "#8FA084",
          light: "#C7D0BC",
          dark: "#5F7056",
        },
        blush: {
          DEFAULT: "#D9BFB4",
          light: "#EDE1DA",
          dark: "#B99485",
        },
        brass: {
          DEFAULT: "#9C7A45",
          light: "#C7A876",
        },
        wine: {
          DEFAULT: "#4A1F1F",
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
