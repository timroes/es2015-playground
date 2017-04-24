const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['whatwg-fetch', './src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 9000
  }
};
