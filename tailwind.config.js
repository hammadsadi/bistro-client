/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#BB8506",
        "color-secondary": "#D99904",
      },
    },
    fontFamily: {
      inter: "Inter, 'sans-serif'",
      raleway: "Raleway, 'sans-serif'",
      cinzel: "Cinzel, 'serif'",
    },
  },
  plugins: [require("daisyui")],
};
