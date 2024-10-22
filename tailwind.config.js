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
      },
      spacing:{
        '474':'31rem',
        '200':'28rem',
      },
      borderRadius:{
        'round':'31rem',
      }
    },
  },
  plugins: [],
}