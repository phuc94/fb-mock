module.exports = {
  mode:'jit',
  purge: [
    './pages/*.js',
    'components/**/*.js',
    'components/**/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
