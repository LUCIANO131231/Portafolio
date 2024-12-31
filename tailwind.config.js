/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "burdeos-profundo": '#401722',
        "negro-oxido": '#D9C091',
        "dorado-arena": '#736B65',
        "taupe-grisaceo": '#262223',
        "blanco-niebla": '#F2F2F2',
      },
    },
    fontFamily: {
      merienda: ['Merienda'],
      press: ['Press Start 2P'],
      bungee: ['Bungee inline'],
      atma: ['Atma'],
      pixelify: ['Pixelify Sans'],
      megrim: ['Megrim'],
      suwannaphum: ['Suwannaphum'],
      honk: ['Honk'],
    },
  },
  plugins: [],
}