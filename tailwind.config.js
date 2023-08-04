/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
    screens:{
      'mobiles':[{'min':'150px','max':'450px'}],
    }, 
  },
   
   
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-no-scrollbar')
  ],
}

