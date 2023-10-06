/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('./src/assets/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall.jpg')",

        "footer-pattern":
          "url('./src/assets/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png')",
      },
    },
  },
  plugins: [],
};
