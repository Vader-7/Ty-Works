/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      //make sure the container is responsive
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      }
    },
  plugins: [],
  }
}