/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        playfair: ['var(--font-playfair)'],
        cormorant: ['var(--font-cormorant)']
      },
      colors: {
        footer: "var(--footer-bg)",
        pink: "var(--pink-color)",
      }
    },
  },
  plugins: [],
}