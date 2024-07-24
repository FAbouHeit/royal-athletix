/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBackground: '#2B2B2B',
        primaryBackground: '#131517',
        accentGray: "#E9E9E9",
        customRed: '#EF4444',
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        spin: 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
