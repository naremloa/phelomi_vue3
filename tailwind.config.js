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
      infinity: '.75em',
    },
    extend: {
      colors: {
        primary: '#2F599C',
        secondary: '#142952',
        accent: '#C4E4EE',
        textBlack: '#231815',
        textGray: 'rgba(0, 0, 0, 0.87)',
        error: '#E96143',
        info: '#41BBD6',
        success: '#94BF80',
        warning: '#FFC107',
        grey: '#f5f5f5',
      },
      width: {
        18: '4.5rem',
        30: '7.5rem',
        51: '12.75rem',
        65: '16.25rem',
        75: '18.75rem',
      },
      minWidth: {
        28: '7rem',
        30: '7.5rem',
        '4/5': '80%',
        '1/5': '20%',
      },
      maxWidth: {
        17: '4.25rem',
        28: '7rem',
        29: '7.25rem',
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
      },
      height: {
        96: '24rem',
        100: '25rem',
        120: '30rem',
        160: '40rem',
        164: '41rem',
        180: '44rem',
        280: '70rem',
        281: '70.25rem',
        '9/10': '90%',
        400: '100rem',
      },
      minHeight: {
        40: '8.5rem',
        52: '13rem',
      },
      maxHeight: {
        160: '40rem',
        228: '57rem',
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
      padding: {
        400: '100rem',
      },
      backgroundImage: () => ({
        'nav-item-texture-hover': 'url("/assets/bg_image/bg_nav-item_hover.png")',
        'nav-item-texture': 'url("/assets/bg_image/bg_nav-item.png")',
        'footer-texture': 'url("/assets/bg_image/bg_order.png")',
        'footer-full-texture': 'url("/assets/bg_image/bg_full-footer.png")',
        'footer-info-texture': 'url("/assets/bg_image/bg_footer.png")',
        'header-texture': 'url("/assets/bg_image/bg_header.jpg")',
        // 'title-texture': 'url("/assets/bg_image/bg_title_ship.svg")',
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
      fontSize: {
        tiny: '.5rem',
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
