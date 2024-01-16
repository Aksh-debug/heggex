/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans:["Inter"],
        lato:["Lato","sans-serif"],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}