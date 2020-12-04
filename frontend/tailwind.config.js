module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animations: {
      // defaults to {}; the following are examples
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
    animationDirection: {
      // defaults to these values
      default: 'normal',
      normal: 'normal',
      reverse: 'reverse',
      alternate: 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    extend: {},
    colors: {
      primary: {
        50: '#fdb1b3',
        100: '#FB676B',
      },
      secondary: {
        50: '#b0d5e3',
        100: '#55b9e0',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      white: '#ffffff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animations')],
};
