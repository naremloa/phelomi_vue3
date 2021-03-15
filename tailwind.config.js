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
    fontFamily: {
      sans: 'Noto Sans TC,Microsoft JhengHei,"微軟正黑體",STHeiti,sans-serif',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
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
      minWidth: {
        30: '7.5rem',
        '4/5': '80%',
        '1/5': '20%',
      },
      maxWidth: {
        28: '7rem',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
      },
      height: {
        96: '24rem',
        160: '40rem',
        164: '41rem',
        180: '44rem',
        280: '70rem',
        281: '70.25rem',
        '9/10': '90%',
      },
      maxHeight: {
        160: '40rem',
      },
      margin: {
        '1/4': '25%',
        '-1/2': '-50%',
        '-1/4': '-25%',
        '-1/8': '-12.5%',
      },
      lineHeight: {
        12: '3rem',
        13: '3.25rem',
        15: '3.75rem',
      },
      flexGrow: {
        '2/5': '40%',
        '3/5': '60%',
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
        'line-texture': 'url("/assets/bg_image/line.png")',
      }),
      boxShadow: {
        location: '0 0 0 1px #fff, 0 0 10px 8px #fff',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      boxShadow: ['hover'],
      flexGrow: ['hover'],
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
