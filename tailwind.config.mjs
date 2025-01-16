/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D91C5E",
        detail: "#DADADA",
      },
      fontFamily: {
        nunito: ['"Nunito Variable"', "sans-serif"],
        onest: ["Onest Variable", "sans-serif"],
      },
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideTop: {
        "0%": { transform: "translateY(-100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideRight: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      slideIn: "slideIn 1s ease-out",
      slideTop: "slideTop 1s ease-out",
      slideRight: "slideRight 1s ease-out",
    },
  },
  plugins: [],
};
