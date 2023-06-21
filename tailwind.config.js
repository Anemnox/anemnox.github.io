/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'btn': '0px -0.5vw #7f1d1d',
        'crd': '1px 1px 5px grey',
        'hvrcrd': '1px 1px 5px blue'
      },
      fontFamily: {
        'terminal': ['Roboto', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'draw-arrow': 'draw-arrow 0.25s forwards ease-in-out 1',
      },
      keyframes: {
        'draw-arrow': {
          '0%': {
            'height': '0%'
          },
          '100%': {
            'height': '60%'
          } 
        }
      }
    },
  },
  plugins: [],
}
