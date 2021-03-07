module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    // screens: {
    //   laptop: '1024px',
    // },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.33%',
    },
    extend: {
      width: {
        51: '12.75rem',
        65: '16.25rem',
        75: '18.75rem',
      },
      height: {
        96: '24rem',
        250: '62.5rem',
      },
      backgroundImage: () => ({
        'footer-texture': 'url("/assets/bg_image/bg_order.png")',
        'footer-info-texture': 'url("/assets/bg_image/bg_footer.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) => {
      // 覆寫 container
      addComponents({
        '.container': {
          maxWidth: '100%',
        },
      });
    },
  ],
};
