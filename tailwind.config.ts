import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "scout-blue": {
          50:  "#e8eef8",
          100: "#c5d3ec",
          200: "#9db5df",
          300: "#7097d1",
          400: "#5080c8",
          500: "#3069be",
          600: "#2558a8",
          700: "#1a458e",
          800: "#0f3275",
          900: "#003087",
          DEFAULT: "#003087",
        },
        "scout-gold": {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          DEFAULT: "#FDB71A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
