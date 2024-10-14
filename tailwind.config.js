/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './about/**/*.{js,html}',
    './lib/partials/**/*.{js,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans'],
        serif: ['Libre Caslon Text', 'serif'],
      },
      colors: {
        primary: '#b98632',
        secondary: '#161b26',
      },
    },
  },
  plugins: [],
};
