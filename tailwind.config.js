/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        triangel: "url(../img/triangle.svg)",
      },
    },
  },
  plugins: [require("daisyui")],
};