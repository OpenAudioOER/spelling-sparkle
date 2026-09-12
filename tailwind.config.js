/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          yellow: "#FAEDCB", // Butter Yellow
          mint: "#C9E4DE",   // Mint Green
          blue: "#C6DEF1",   // Soft Powder Blue
          lavender: "#DBCDF0", // Soft Lavender
          pink: "#F2C6DE",   // Cotton Candy Pink
          peach: "#F7D9C4",  // Soft Peach / Cream
        },
      },
    },
  },
  plugins: [],
};
