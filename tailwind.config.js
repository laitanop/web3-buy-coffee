/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDD00",
        secondary: "#6F4E37",
      },
    },
  },
  plugins: [],
};
