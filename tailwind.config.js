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
          "url('./src/assets/woman-holding-various-shopping-bags-copy-space.jpg')",

        "footer-pattern":
          "url('./src/assets/woman-holding-various-shopping-bags-copy-space.jpg')",
      },
    },
  },
  plugins: [],
};
