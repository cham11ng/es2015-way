var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: './dist/main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}