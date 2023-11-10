/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custombackground: 'rgb(40, 32, 39)', // Define your custom RGB color
        carrara: 'rgb(241,242,227)',
        navbar: 'rgb(12,11,13)',
        darkSkin: 'rgb(130, 120, 110)',
        pampas: 'rgb(234,228,220)'
      },
    },
  },
  plugins: [],
}

