var webpack = require('webpack');
var WebpackBar = require('webpackbar');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: ['./src/index.js', './src/app.scss']
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new WebpackBar({
      profile: true,
      name: 'Webpack Starter'
    }),

    new ExtractTextPlugin('[name].css'),

    new webpack.LoaderOptionsPlugin({
      minimize: process.env.NODE_ENV === 'production'
    }),

    new HTMLWebpackPlugin({
      title: 'Webpack Starter',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      }
    })
  ]
};
