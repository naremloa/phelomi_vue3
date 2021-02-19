module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        footer: '200px minmax(20px, 1fr) 100px',
      },
      gridTemplateRows: {
        footer: '50px minmax(20px, 1fr) 50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
