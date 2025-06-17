/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        staylista: ["Staylista", "sans-serif"], // Add Staylista font
        albertSans: "var(--fonts-tertiary-font)",
        ivy: ["Ivy", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary-color)",
        secondary: "var(--color-secondary)",
      },
      screens: {
        mobile:'250px',
        large:'2000px'
      }
    },
  },
  plugins: [],
};
