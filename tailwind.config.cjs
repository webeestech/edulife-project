/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F5F4F0",
        "primary-300": "#FD661F",
        "primary-500": "#ADADAD",
        "secondary-100": "#30333C",
        "secondary-300": "#F8F8F8",
        "secondary-500": "#689CF0"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content:{
        edutext: "url('./assets/EdulifeText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        geo: "url('./assets/geo.png')",
        arrow: "url('./assets/arrow.png')"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    },
  },
  plugins: [],
}