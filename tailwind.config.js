module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matt-dark': '#212121',
        'matt-darknav': 'rgba(33,33,33)',
        'matt-lightnav': 'rgba(255,255,255)'
      },
      transitionProperty: {
        'height': 'height'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}