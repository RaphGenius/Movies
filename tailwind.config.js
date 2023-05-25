/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      lg: "992px",
    },
    extend: {
      fontFamily: {
        special: "'Cherry Bomb One', cursive",
      },
    },
  },
  plugins: [],
};
