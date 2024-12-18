/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Cinza: '#1f1f1f',
        font: '#B3B3B3',
        Sidebar: '#121212',
        SideButton:'#2A2A2A',
        Card:'#40464C',
      },
      spacing:{
        '474':'31rem',
        '200':'28rem',
        '100':'26rem',
        '50':'23rem',
        '13':'14rem',
      },
      borderRadius:{
        'round':'31rem',
      }
    },
  },
  plugins: [],
}