/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#132430",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      // fontFamily: {
      //   "belgiano-serif": ["BelgianoSerif", "serif"],
      //   "mustica-pro": ["MusticaPro", "san-serif"]
      // },
    },
  },
  plugins: [],
};
