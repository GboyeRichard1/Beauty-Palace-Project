/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'spa': "url ('images/spa.png')",
      }
    },
  },
  plugins: []
}
