/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};


