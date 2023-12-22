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
        bgcolor: "#151517",
        footerbg: "#212121",
        fontPrimary: "rgb(204, 204, 204)"
      }
    },
  },
  plugins: [],
}

