/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter Variable', 'sans-serif'], // Buradaki isim, @font-face'teki isimle aynı olmalı
        'geometos': ['Geometos', 'sans-serif'], // Yeni eklenen
        'roboto': ['Roboto Variable', 'sans-serif'], // Yeni eklenen
      },
    },
  },
  plugins: [],
}