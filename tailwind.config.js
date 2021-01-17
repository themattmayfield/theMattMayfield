module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matt-dark': '#212121',
        'matt-nav': 'rgba(33,33,33)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}