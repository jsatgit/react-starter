const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-class-properties')
            ]
          }
        }
      }
    ]
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};
