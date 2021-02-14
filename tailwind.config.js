module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        '2015vw': '20.15vw',
      },
      height: {
        '2015vw': '20.15vw',
      },
      borderWidth: {
        '1vw': '1vw',
      },
      borderRadius: {
        '3vw': '3vw',
      },
      lineHeight: {
        '1815vw': '18.15vw',
      },
      fontSize: {
        '3vw': '3vw',
      },
      letterSpacing: {
        '03vw': '0.3vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
