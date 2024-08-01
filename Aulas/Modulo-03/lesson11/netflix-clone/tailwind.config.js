/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'dvh-minus-2rem': 'calc(100vw - 2rem)',
      }
    }
  },
  plugins: [],
}