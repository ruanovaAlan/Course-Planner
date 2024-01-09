/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Lobster"', 'sans-serif'],
        body: ['"Oswal"', 'sans-serif']
      },
    },
  },
  plugins: [],
}