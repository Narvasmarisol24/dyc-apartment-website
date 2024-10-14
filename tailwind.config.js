/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './about/**/*.{js,html}',
    './units/**/*.{js,html}',
    './contact/**/*.{js,html}',
    './lib/partials/**/*.{js,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans'],
        serif: ['Libre Caslon Text', 'serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
