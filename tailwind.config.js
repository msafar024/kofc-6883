/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kofc-blue': '#1E1656',  // Deep navy blue
        'kofc-gold': '#FDB913',  // Rich gold
        'kofc-red': '#CC0001',   // Vibrant red
        'kofc-dark': '#1D1D1B',  // Near black
        'kofc-light': '#F8F8F8', // Light background
        'kofc-gold-light': '#FFF3D6', // Light gold for backgrounds
        'kofc-blue-light': '#E6E8F0', // Light blue for backgrounds
      },
      fontFamily: {
        'trajan': ['trajan-pro-3', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'trajan-pro-3, serif',
              color: '#1E1656',
            },
            h2: {
              fontFamily: 'trajan-pro-3, serif',
              color: '#1E1656',
            },
            h3: {
              fontFamily: 'trajan-pro-3, serif',
              color: '#1E1656',
            },
            h4: {
              fontFamily: 'trajan-pro-3, serif',
              color: '#1E1656',
            },
            p: {
              fontFamily: 'EB Garamond, serif',
            },
            a: {
              color: '#CC0001',
              '&:hover': {
                color: '#1E1656',
              },
            },
            strong: {
              color: '#1E1656',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
