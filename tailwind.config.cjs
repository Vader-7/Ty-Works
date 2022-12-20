const { default: zIndex } = require('@mui/material/styles/zIndex');
const { height } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    p: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",},
    container: {
      center: true,
      // add horizontal padding to the container
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      // set the width of the container
      width : {
        sm: "80%",
        md: "80%",
        lg: "80%",
        xl: "80%",
      },
      screens: {
        sm: "80%",
        md: "80%",
        lg: "80%",
        xl: "80%",
      },
      height : {
        sm: "80%",
        md: "80%",
        lg: "80%",
        xl: "80%",
      },
      // dont let the container touch the edges of the screen

    },
  plugins: [],
  }
}