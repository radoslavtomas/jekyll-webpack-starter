module.exports = {
  purge: [], // @TODO: setup purge
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
            'sans': ["Poppins", "Arial", "sans-serif"],
            'mono': ['ource Code Pro', 'monospace']
        },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
