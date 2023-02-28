/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "almost-black": "#0D0D0D",
        "light-transparent": "hsla(0, 0%, 90%, 0.6)",
        "dark-transparent": "hsla(0, 0%, 5%, 0.6)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "permanent-marker": ["var(--font-permanent-marker)"],
      },
    },
  },
  plugins: [],
};
