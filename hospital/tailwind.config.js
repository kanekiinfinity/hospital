
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#336CFB',
        primary2: '#27AE60',
        textcolor: '#52575C',
        tertiary: '#EB5757',
        borderColor: '#BBBBBB',
        line: '#DBDDE0',
        titleColor: '#25282B'

      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
    boxShadow: {
      myShadow: '0px 12px 16px 0px #7D7D7D40'
    }
  },
  plugins: [],
}

