const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const NODE_ENV = 'development';

module.exports = merge(common, {
  mode: NODE_ENV,

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: '0.0.0.0',
    contentBase: './dist'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': NODE_ENV
    })
  ]
});
