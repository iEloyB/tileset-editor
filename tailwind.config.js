/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // o 'media' para detección automática del sistema
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#1a73e8',
        },
        dark: {
          background: '#212121',
          text: '#ffffff',
          primary: '#bb86fc',
        },
      },
    },
  },
  plugins: [],
};
