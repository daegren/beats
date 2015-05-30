var webpack = require('webpack');

module.exports = {
  entry: './BeatsApp.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'app.js',
    library: 'BeatsApp',
    libraryTarget: 'commonjs2'
  },
  devtool: 'inline-source-map',
  watch: true,
  module: {
    loaders : [
      // {
      //   extensions: [ 'js' ],
      //   test: /\.js$/,
      //   loaders: 'babel-loader?stage=0',
      //   loader: 'babel-loader?stage=0',
      //   exclude: /node_modules/
      // },
      {
        extensions: [ 'js', 'jsx', 'react.js' ],
        test: /\.(jsx?|react\.js)(\?.*)?$/,
        loaders: 'babel-loader?stage=0',
        loader: 'babel-loader?stage=0'
      }
    ]
  }
};
