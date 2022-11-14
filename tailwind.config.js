const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
};
