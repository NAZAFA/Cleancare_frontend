/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'Primary': '#ED5B2C',
        'Secondary': '#FFCF6D',
        'gray':'#D9D9D97A'
      },
    },
  },
  plugins: [],
}

