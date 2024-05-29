import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        linkColor: "var(--color-link)",
        // Navbar
        navbar: "var(--color-navbar)",
        navbarLogoName: "var(--color-navbar-logoname)",
        navbarLogoText: "var(--color-navbar-text)",
        selectedNavbarTab: "var(--color-selectedNavbarTab)",
        selectedNavbarTabText: "var(--color-selectedNavbarText)",
        navbarBorderColor: "var(--color-navbar-border)",
        // Buttons
        button: "var(--color-button)",
        buttonText: "var(--color-buttonText)",
      },
      fontFamily: {
        sans: ["Segoe UI", "sans-serif"],
      },
    },
  },
};

export default config;
