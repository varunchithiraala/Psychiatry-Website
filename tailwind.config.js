/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        georgia: ['"Georgia"', 'sans-serif'],
        playfair: "Playfair Display"
      },
      colors: {
        'gold': '#f9f4d2',
        'light-gold': '#ffffe6',
        'thick-gold': '#ccad00',
        'thicker-gold': '#cc9900',
        'li-gold': '#ffd700'
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #b39800, #e6c300, #ffe866, #e6c300, #b39800)'
      })
    },
  },
  plugins: [],
}
