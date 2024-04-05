/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF782D",
        dark_gary: "#555555",
        white_gary: "#F5F5F5",
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-no-scrollbar'),
    require('tailwind-scrollbar'),
  ],
};
