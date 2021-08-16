module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bms:{
  50: '#efeffd',
  100: '#f74464',
  200: '#b2b4cd',
  300: '#9396b8',
  400: '#7578a2',
  500: '#5c5f89',
  600: '#474a6b',
  700: '#32354d',
  800: '#2b3149',
  900: '#070b16',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
