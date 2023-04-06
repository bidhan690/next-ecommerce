/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        chewy: ["var(--font-chewy)", ...fontFamily.sans],
        andika: ["var(--font-andika)", ...fontFamily.sans],
        oxygen: ["var(--font-oxygen)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
