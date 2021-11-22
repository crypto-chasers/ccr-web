module.exports = {
  purge: {
    enable: true,
    content: ['./src/*.tsx', './src/**/*.tsx', './src/index.html'],
  },
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
  },
  variants: {
    extend: {}
  },
  plugins: []
}
