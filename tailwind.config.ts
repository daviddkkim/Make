import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-100": {
        light: "#fcfdff",
        dark: "#091021"
      },
      "primary-200": {
        light: "#f5faff",
        dark: "#0d172c"
      },
      "primary-300": {
        light: "#eaf2ff",
        dark: "#0c2158"
      },
      "primary-400": {
        light: "#ddeaff",
        dark: "#0c2977"
      },
      "primary-500": {
        light: "#ccdfff",
        dark: "#11328d"
      },
      "primary-600": {
        light: "#b6d1ff",
        dark: "#193e9f"
      },
      "primary-700": {
        light: "#97beff",
        dark: "204ab6"
      },
      "primary-800": {
        light: "#72a3ff",
        dark: "#2556d6"
      },
      "primary-900": {
        light: "#0300e0",
        dark: "#0300e0"
      },
      "primary-1000": {
        light: "#32009b",
        dark: "#32009b"
      },
      "primary-1100": {
        light: "#164df3",
        dark: "#89b1ff"
      },
      "primary-1200": {
        light: "#0f296f",
        dark: "#d0e2ff"
      },
    }
  },
  plugins: [],
};
export default config;
