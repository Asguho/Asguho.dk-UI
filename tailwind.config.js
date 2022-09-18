module.exports = {
  content: [
    'index.html',
    'login.html',
    'notegenerator.html',
    'trianglecalculator.html',
    'article.html',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
