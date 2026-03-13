import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#dce6ff",
          200: "#b9ccff",
          300: "#8aabff",
          400: "#527fff",
          500: "#2b57ff",
          600: "#1438f5",
          700: "#0f28e1",
          800: "#1123b5",
          900: "#13228e",
          950: "#0e1657",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
