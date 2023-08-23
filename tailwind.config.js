/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#EBEBEC',
        second: '#FFB3B3',
        op5: 'rgba(0,0,0, 0.5)'
      },
      fontSize:{
        px24: '1.5rem',
        px28: '1.75rem',
        px32: '2rem',
        px40: '2.5rem',
        px48: '3rem',
      },
      boxShadow:{
        bx: '0 0 1rem white',
        bw: '0 0 0.5rem white',
      },
      width:{
        project: '50rem',
        px472: '29.5rem',
        px976: '61rem'
      },
      height:{
        navH: 'var(--nav-height)',
        project: '25rem',
        px89: '5.5rem'
      }
    },
  },
  plugins: [],
}

