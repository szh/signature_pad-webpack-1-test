/* eslint import/no-extraneous-dependencies: ["error", { devDependencies: true}] */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',

  output: {
    path: 'dist',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};
