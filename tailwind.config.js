/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 4, 15, 1.0)",
        primaryOverlay: "rgba(0, 4, 15, 0.3)",
        primaryOverlayDark: "rgba(0, 4, 15, 0.7)",
        secondary: "#DBF227",
        dimWhite: "rgba(255, 255, 255, 0.75)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        sans: ["Roboto", "Poppins", "sans-serif"],
        // sans: ["Poppins", "sans-serif"],
        // sans: ["sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    scale: {
      '175': '1.75',
      '200': '2.00',
      '220': '2.20',
      '300': '3.00',
    }

  },
  plugins: [],
}

