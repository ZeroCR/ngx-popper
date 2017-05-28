const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'ngx-popper.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.css']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['awesome-typescript-loader']
      },
      /* Embed files. */
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
      {
        test: /\/popper.js/,
        loader: 'script-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new ProgressBarPlugin({
      format: '  build [' + chalk.blue.bold(':bar') + ']' + chalk.green.bold(':percent') + ' (:elapsed seconds) => :msg...  ',
      clear: false
    })
  ]
};