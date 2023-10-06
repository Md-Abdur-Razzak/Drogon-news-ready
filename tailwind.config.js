/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        fontPoppines: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

