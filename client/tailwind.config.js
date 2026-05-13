/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          light: '#fdf2f8',
          DEFAULT: '#fbcfe8',
          dark: '#f472b6',
        },
        lavender: {
          light: '#f3e8ff',
          DEFAULT: '#d8b4fe',
          dark: '#a855f7',
        },
        peach: {
          light: '#fff7ed',
          DEFAULT: '#fed7aa',
          dark: '#fb923c',
        }
      },
    },
  },
  plugins: [],
}