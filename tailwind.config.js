/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { transform:'translateY(25%)', opacity: '0' },
          '100%': { transform:'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },},
  },
  plugins: [],
}