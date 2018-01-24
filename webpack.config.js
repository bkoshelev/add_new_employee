const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'src/');

const BUILD_DIR = path.resolve(__dirname, 'dist/');

const frontend = {
  entry: {
    app: `${APP_DIR}/app.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

module.exports = [Object.assign({}, {}, frontend)];
