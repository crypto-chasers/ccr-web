module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '412px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      pix: ['IPix']
    },
    textColor: {
      dark: '#3d2200',
      main: '#fda51c',
      light: '#ffe8a8'
    }
  },
  plugins: []
}
