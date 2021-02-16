module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        'screen-20.15vw': '20.15vw',
        'screen-27.54': '27.54vw',
      },
      height: {
        'screen-20.15vw': '20.15vw',
        'screen-19.66': '19.66vw',
      },
      padding: {
        'screen-0.4': '0.4vw',
        'screen-0.95': '0.95vw',
        'screen-2.42': '2.42vw',
      },
      borderWidth: {
        'screen-0.15': '0.15vw',
        'screen-1vw': '1vw',
      },
      borderRadius: {
        'screen-3vw': '3vw',
      },
      textColor: {
        'darkblue': '#2f599c'
      },
      borderColor: {
        'darkblue': '#2f599c'
      },
      lineHeight: {
        'screen-18.15vw': '18.15vw',
      },
      fontSize: {
        'screen-3vw': '3vw',
        'screen-1.3': '1.3vw',
        'screen-2.08': '2.08vw',
      },
      letterSpacing: {
        'screen-0.3vw': '0.3vw',
        'screen-0.4': '0.4vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
