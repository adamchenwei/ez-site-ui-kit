const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = './src';
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: SOURCE_DIR + '/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  //plugins: [HtmlWebpackPluginConfig]
}
