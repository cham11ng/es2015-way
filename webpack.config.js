var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: './dist/main.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: []
};

if (process.env.NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}