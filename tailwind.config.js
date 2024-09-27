// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Includes files inside the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Includes files inside the components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
