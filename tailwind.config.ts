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
        //          "primary-button": "linear-gradient(to bottom, #0300e0, #0300e0 ),linear-gradient(to bottom,#0000 50%, #00000017),linear-gradient(to bottom,#0000 50%, #0300e0 80%)"
      },
      boxShadow: {
        "primary-button":
          "inset 0 0 0 1px #00000017,inset 0 -2px 1px #0000000f,inset 0 0 0 1px #0300e0, inset 0 4px 2px -2px #00000072,inset 0 2px 1px -1px #00000072",
      },
    },
  },
  plugins: [],
};
export default config;
