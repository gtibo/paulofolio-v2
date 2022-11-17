const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Red Hat Display', "sans-serif"]
      },
      colors: {
        default: '#F2F3F9',
        accent: '#3CDB4C',
        deepgreen: '#1C221F'
      }
    }
  },

  plugins: []
};

module.exports = config;
