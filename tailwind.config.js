module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'almost-black': '#0D0D0D',
        'light-transparent': 'hsla(0, 0%, 90%, 0.6)',
        'dark-transparent': 'hsla(0, 0%, 5%, 0.6)',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
