module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-gray': '#0D1117',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
