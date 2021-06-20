const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
