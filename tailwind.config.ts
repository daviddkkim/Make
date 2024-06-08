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
        "sand-100": {
          light: "#fdfdfc",
          dark: "#111110"
        },
        "sand-200": {
          light: "#f9f9f8",
          dark: "#191918"
        },
        "sand-300": {
          light: "#f1f0ef",
          dark: "#222221"
        },
        "sand-400": {
          light: "#e9e8e6",
          dark: "#2a2a28"
        },
        "sand-500": {
          light: "#e2e1de",
          dark: "#31312e"
        },
        "sand-600": {
          light: "#dad9d6",
          dark: "#3b3a37"
        },
        "sand-700": {
          light: "#cfceca",
          dark: "#494844"
        },
        "sand-800": {
          light: "#bcbbb5",
          dark: "#62605b"
        },
        "sand-900": {
          light: "#8d8d86",
          dark: "#6f6d66"
        },
        "sand-1000": {
          light: "#82827c",
          dark: "#7c7b74"
        },
        "sand-1100": {
          light: "#63635e",
          dark: "#b5b3ad"
        },
        "sand-1200": {
          light: "#21201c",
          dark: "#eeeeec"
        },
      }
    },

  },
  plugins: [],
};
export default config;
