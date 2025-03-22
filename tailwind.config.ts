import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "max-xs": { max: "480px" },
        "max-sm": { max: "768px" },
        "max-md": { max: "992px" },
        "max-lg": { max: "1200px" },
        "max-xl": { max: "1399px" },
      },
    },
    screens: {
      "max-xs": { max: "480px" },
      "max-sm": { max: "768px" },
      "max-md": { max: "992px" },
      "max-lg": { max: "1200px" },
      "max-xl": { max: "1399px" },
    },
  },
  plugins: [],
} satisfies Config;
