var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: ['./src/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'builf'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  mode: 'development',
  devServer: {
    static: './build',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  jest: {
    
  },
};

module.exports = config;
