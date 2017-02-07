/* eslint import/no-extraneous-dependencies: ["error", { devDependencies: true}] */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.ts',

  output: {
    path: 'dist',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
  },

  module: {
    loaders: [{
      test: /.ts$/,
      loader: 'ts'
    }]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};
