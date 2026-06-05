import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E1F3D",
          deep:    "#06122A",
          light:   "#1A3055",
          line:    "#1F3766"
        },
        gold: {
          DEFAULT: "#C9A05B",
          dark:    "#9B7C40",
          light:   "#E3C580"
        },
        cream: "#FBF8F2"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.16em"
      }
    }
  },
  plugins: []
};

export default config;
