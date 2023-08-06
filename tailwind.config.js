/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'cerebri':['Cerebri', 'sans-serif'],
        'cerebriB':['CerebriB'] 
      },

      colors: {
        'regal-blue': '#0f1c2f',
        'regal-sky':'#4dd3f5'
      },
      borderRadius:{
        'xxl':'4rem'
      }

    },
  },
  plugins: [],
}

