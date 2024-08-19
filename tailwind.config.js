/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-green': 'hsl(148, 38%, 91%)',
      'green': 'hsl(169, 82%, 27%)',
      'red': 'hsl(0, 66%, 54%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(186, 15%, 59%)',
      'gray': 'hsl(187, 24%, 22%)',
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

