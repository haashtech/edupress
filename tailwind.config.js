/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF782D", 
      },
       fontFamily:{
        "Exo":["Exo", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}