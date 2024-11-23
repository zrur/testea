import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        corPrimaria: "#0FBBC8",
        corSecundaria: "#212329",
        corTerciaria: "#D3D7D8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse, orangered, transparent, orange)',
      },
    },
  },
  plugins: [],
};

export default config;
