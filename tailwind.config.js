/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: [
          'Lato',
          'Nunito',
          'Roboto',
          'Open Sans',
          'sans-serif'
        ]
      },
      colors: {
        bgcolor: "#2d2d2d",
        footerbg: "#333"
      }
    },
  },
  plugins: [],
}

