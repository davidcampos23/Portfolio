/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        second: '#FFB3B3',
      },
      fontSize:{
        px28: '1.75rem',
        px32: '2rem',
        px40: '2.5rem',
        px48: '3rem',
      },
      boxShadow:{
        bx: '0 0 1rem white',
      }
    },
  },
  plugins: [],
}

