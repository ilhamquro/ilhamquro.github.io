/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Mulish" : "Mulish"
      },
      colors: {
        "primary": "#333646",
        "secondary":"#242734",
        "icon": "#ffc256",
        "text":"#9da9ce"
      }
    },
  },
  plugins: [],
}