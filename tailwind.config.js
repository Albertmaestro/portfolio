/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutme: "url('./images/about.jpg')",
      },
      colors: {
        primary: "#0c0e1c",
        secondary: "#13172f",
        tertiary: "#181d3c",
        accent: "#ffc000",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
