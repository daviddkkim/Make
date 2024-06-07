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
      "slate-100": {
        light: "#fcfcfd",
        dark: "#111113"
      },
      "slate-200": {
        light: "#f9f9fb",
        dark: "#18191b"
      },
      "slate-300": {
        light: "#f0f0f3",
        dark: "#212225"
      },
      "slate-400": {
        light: "#e8e8ec",
        dark: "#272a2d"
      },
      "slate-500": {
        light: "#e0e1e6",
        dark: "#2e3135"
      },
      "slate-600": {
        light: "#d9d9e0",
        dark: "#363a3f"
      },
      "slate-700": {
        light: "#cdced6",
        dark: "#43484e"
      },
      "slate-800": {
        light: "#b9bbc6",
        dark: "#5a6169"
      },
      "slate-900": {
        light: "#8b8d98",
        dark: "#696e77"
      },
      "slate-1000": {
        light: "#80838d",
        dark: "#777b84"
      },
      "slate-1100": {
        light: "#60646c",
        dark: "#b0b4ba"
      },
      "slate-1200": {
        light: "#1c2024",
        dark: "#edeef0"
      },
    }
  },
  plugins: [],
};
export default config;
