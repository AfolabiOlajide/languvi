/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: "#FF9E45",
        primaryDark: "#EF7E3A",
        secondary: "#3C66A0",
        navyDark: "#344054",
        navyLight: "#667085",
        ash: "#CBCCE8"
      }
    },
  },
  plugins: [],
}
