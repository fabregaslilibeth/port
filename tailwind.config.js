/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: "#ffb400",
        background: "#111111",
        secondary: "#252525",
        navitem: "#2b2a2a",
        border: "#625f5f",
      },
      fontFamily: {
        sans: ["Maven Pro"],
        cursive: ["Gloria Hallelujah"],
      },
      spacing: {
        90: "360px",
        108: "432px",
      },
    },
  },
  plugins: [],
};
