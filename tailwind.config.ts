import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        formCustom: "all 0.3s ease-in",
      },
      colors: {
        bgColor: "var(--bgColor)",
        bgWhiteColor: "var(--bgWhiteColor)",
        orangeColor: "var(--orangeColor)",
        grayColor: "var(--grayColor)",
        textColor: "var(--textColor)",
        grayTextColor: "var(--grayTextColor)",
        borderColor: "var(--borderColor)",
        formHover: "var(--formHover)",
        githubBg: "var(--githubBg)",
        linkedinBg: "var(--linkedinBg)",
        facebookBg: "var(--facebookBg)",
        overlayColor: "var(--overlayColor)",
        socialTextColor: "var(--socialTextColor)",
      },
    },
  },
  plugins: [],
};
export default config;
