/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      lg: "992px",
      md: "678px",
      sm: "640px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        special: "'Cherry Bomb One', cursive",
      },
      backgroundImage: {
        "hero-image": "url(./assets/bg-hero.jpg)  ",
      },
    },
  },
  plugins: [],
};
