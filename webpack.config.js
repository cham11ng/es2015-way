const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: ['./src/index.js', './src/app.scss']
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: './dist'
  },

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
    new CleanWebpackPlugin(['dist'], { verbose: false }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin('[name].css'),

    new WebpackBar({
      name: 'Webpack Starter'
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
