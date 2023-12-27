/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        'tablet':{'max': '1200px'},
        'mobile':{'max': '900px'}
      },
      colors:{
        primary: '#EBEBEC',
        second: '#FFB3B3',
        op5: 'rgba(0,0,0, 0.5)',
        stacks: '#70c3e1',
        primaryDK: '#161616',
        secondDK: '#323232',
        skillsDK: '#2B2B2B',
        textDKc: 'rgba(255, 255, 255, 0.60)',
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
        bb: '0 0 0.5rem #EBEBEC',
        darkBw: '0 0 0.5rem black',
        darkBx: '0 0 1rem black',
        darkBb: '0 0 0.5rem gray',
      },
      width:{
        project: '40rem',
        px472: '29.5rem',
        px976: '61rem',
        pc400: '400%',
        foto: '553px'
      },
      height:{
        navH: 'var(--nav-height)',
        project: '25rem',
        slideProj: '30rem',
        px89: '5.5rem',
        foto: '714px'
      },
    },
  },
  plugins: [],
}

