/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage:{
        "homeBackground" : "url('assets/background-home.png')"
      }
    },
  },
  plugins: [],
};
