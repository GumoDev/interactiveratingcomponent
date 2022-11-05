/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        orange: {
          orange: "hsl(25,97%,53%)"
        }, 
        lightGrey: {
          lightGrey: 'hsl(217,12%,63%)'
        },
        MediumGrey:{
          MediumGrey: 'hsl(216,12%,54%)' 
        }, 
        DarkBlue: {
          DarkBlue: 'hsl(213,19%,18%)'
        }, 
        VeryDarkBlue: {
          VeryDarkBlue: 'hsl(216,12%,8%)'
        },
        Background: {
          Slate: 'hsl(221.54,13.68%,18.63%)'
        }
      }
    },
  },
plugins: [],
}
