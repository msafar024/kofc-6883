/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kofc-blue': '#1E1656', // Dark navy blue from the logo
        'kofc-gold': '#FFC72C', // Gold/orange from the logo
        'kofc-red': '#CC0001', // Red from the logo
        'kofc-dark': '#1C1C1C',
      },
      fontFamily: {
        'trajan': ['Trajan Pro', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}
