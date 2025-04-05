/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        triangel: "url(../img/triangle.svg)",
      },
    },
  },
  plugins: [require("daisyui")],
};