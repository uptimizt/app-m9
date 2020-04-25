const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '.'),
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3333
  },

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '.'),
  },
};