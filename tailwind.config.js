/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'bar': '2px'
      },
      gridTemplateColumns: {
        'dashboard': 'auto 1fr'
      },
      boxShadow: {
        'card': '0px 4px 10px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
