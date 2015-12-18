
'use strict';

var path = require('path'),
  webpack = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);


module.exports = [{
  name: 'react-d3-animate',
  devtool: ENV ? "source-map": '',
  entry: {
    animate: './example/src/animate.jsx',
    line: './example/src/line.jsx'
  },

  output: {
    path: path.join(__dirname, './example/dist'),
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ["jsx-loader"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}];
