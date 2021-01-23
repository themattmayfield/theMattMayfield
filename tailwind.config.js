module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'matt-dark': '#212121',
        'matt-darknav': 'rgba(33,33,33)',
        'matt-lightnav': 'rgba(255,255,255)',
        'matt-textlight': '#F0F0F0',
        'matt-textdark': '#333333'
      },
      transitionProperty: {
        'height': 'height'
       },
       transitionDuration: {
        '0': '0ms'
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    },
  },
  plugins: [],
}