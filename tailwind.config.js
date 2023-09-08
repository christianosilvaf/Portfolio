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
      'darkgreen': '#191E29',
      'bluemarin': '#132D46',
      'palegreen': '#01C38D',
      'gray': '#696E79',
      'white': '#FFFFFF',
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

