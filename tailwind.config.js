/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banus' : "url('../public/puerto-banus-la-concha.jpeg')",
      },
      fontFamily: {
        'zesta': "Zesta_Medium",
        'zesta-regular': "Zesta_Regular",
        'zesta-black': "Zesta_Black",
        'zesta-bold': "Zesta_Bold",
        'zesta-italic': "Zesta_Italic",
        'montserrat': "Montserrat_SemiBold",
        'cocogothic': "CocoGothic",
      },
      colors: {
        'primary': '#8c2851',
        's-blue':'#c8d3de',
        'p-light' : '#d26d96',
        'accent': '#FFD700',
        'light-blue': '#CEDBE5',
        'background-colour' : '#F0F8FF',
        'text-colour' : '#000080',
        'secondary':'#01BFFF',
      },
      height: {
        'l' : '45rem',
        'xl': '61.75rem',
        'xxl': '110rem',
      },
      width:{
        'box': '45rem',
        'rectangle':'60rem',
        'text':'55rem',
      },
      margin: {
        'sm-text' : '2rem',
      }
    },
  },
  plugins: [],
}
