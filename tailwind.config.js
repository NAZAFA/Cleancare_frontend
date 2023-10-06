/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
       'Primary': '#ED5B2C',
        'Secondary': '#FFCF6D',
        'gray':'#D9D9D97A'
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
  },
  plugins: [],
}



