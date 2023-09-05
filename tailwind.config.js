/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mywhite': '#FAFBF4',
      'sea': '#00A0F3',
      'myblue': '#0000FF',
      'darkblue': '#000066',
      'black': '#000000',
    },

    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Syne':['Syne', 'sans-serif']
      },

    },
  },
  plugins: [],
}

