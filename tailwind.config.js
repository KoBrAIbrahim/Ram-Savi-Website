/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          light: '#FF0000',
          dark: '#FF0000',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
