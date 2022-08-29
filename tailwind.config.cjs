/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '720px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        'main':'#45852D',
        'secondary':'#D8D8D8',
      },
      flex: {
        '3': '3 3 30%'
      },
      maxWidth:{
        'content':"1440px"
      },
      width:{
        '12p':'14px',
        '16p':'16px',
        '20p':'20px',
        '36p':'36px'
      }
    },
  },
  plugins: [],
}
