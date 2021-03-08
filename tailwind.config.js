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
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    minWidth: {
      30: '7.5rem',
    },

    maxHeight: {
      160: '40rem',
    },
    extend: {
      colors: {
        primary: '#2F599C',
        secondary: '#142952',
        accent: '#C4E4EE',
        textBlack: '#231815',
        error: '#E96143',
        info: '#41BBD6',
        success: '#94BF80',
        warning: '#FFC107',
      },
      width: {
        18: '4.5rem',
        30: '7.5rem',
        51: '12.75rem',
        65: '16.25rem',
        75: '18.75rem',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      height: {
        96: '24rem',
        160: '40rem',
        164: '41rem',
        280: '70rem',
        281: '70.25rem',
      },
      margin: {
        '1/4': '25%',
        '-1/2': '-50%',
        '-1/4': '-25%',
        '-1/8': '-12.5%',
      },
      zIndex: {
        '-1': -1,
      },
      backgroundImage: () => ({
        'nav-item-texture-hover': 'url("/assets/bg_image/bg_nav-item_hover.png")',
        'nav-item-texture': 'url("/assets/bg_image/bg_nav-item.png")',
        'footer-texture': 'url("/assets/bg_image/bg_order.png")',
        'footer-info-texture': 'url("/assets/bg_image/bg_footer.png")',
        'header-texture': 'url("/assets/bg_image/bg_header.jpg")',
        'title-texture': 'url("/assets/bg_image/bg_title.png")',
        'map-texture': 'url("/assets/bg_image/bg_haveFun.jpg")',
        'location-texture': 'url("/assets/bg_image/bg_location.jpg")',
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
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
