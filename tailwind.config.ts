import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['"Jaro"', 'sans-serif'], // Add Jaro font
        abril: ['"Abril Fatface"', 'cursive'], // Add Abril Fatface font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#006eb9',
      },
      animation: {
        "wobble-rotate-zoom": "wobble 4s ease-in-out infinite, rotateZoom 6s linear infinite, swing 5s ease-in-out infinite",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px) rotate(-3deg)" },
          "50%": { transform: "translateX(10px) rotate(3deg)" },
          "75%": { transform: "translateX(-5px) rotate(-1.5deg)" },
        },
        rotateZoom: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
