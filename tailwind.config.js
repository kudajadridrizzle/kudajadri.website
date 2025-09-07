/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        staylista: ["Staylista", "sans-serif"],
        albertSans: "var(--fonts-tertiary-font)",
        ivy: ["Ivy", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary-color)",
        secondary: "var(--color-secondary)",
      },
      screens: {
        mobile: '250px',
        large: '2000px'
      },
      keyframes: {
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
