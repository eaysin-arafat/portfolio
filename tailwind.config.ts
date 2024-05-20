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
        bgColor: "#f6f5ef",
        orangeColor: "#eb5424",
        grayColor: "#303030",
        githubBg: "#232323",
        linkedinBg: "#e9e9e9",
        facebookBg: "#0866ff",
      },
    },
  },
  plugins: [],
};
export default config;
