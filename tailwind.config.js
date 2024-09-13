/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif'],
        hammerssmith: ['Hammersmith One', 'sans-serif'],
        halant: ['Halant',' serif']
      },
    },
  },
  plugins: [],
}