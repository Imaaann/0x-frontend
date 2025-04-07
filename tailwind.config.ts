import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#1C82AD",
        accent: "#03C988",
      },
      fontFamily: {
        hoover: "var(--tektur-font), sans serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
