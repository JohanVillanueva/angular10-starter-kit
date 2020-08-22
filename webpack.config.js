const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const autoPrefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [postcssImport, tailwindcss, autoPrefixer],
        },
      },
    ],
  },
};
