/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      grayscale: {
        50: '70%',
      },
      colors: {
        //'primary': '#0f172a',
        'primary': '#0f172a',
        'secondary': '#1f2937',
        'third': "#ADBAC7",
        'fourth': '#a6b0ba',
        'button': '#007976',
        'txt': '#e0dcdc',
        'txt-second': '#539bf5',
        //#16a085
        //#a3e4d7
        //#768390
        // button - #00796B
      },
    },
    screens: {
      'xsm': '540px',
      'sm': '576px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    plugins: [],
  }
}
