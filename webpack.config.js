const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],
 output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'react-boilerplate'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new OpenBrowserWebpackPlugin({
      url: 'http://localhost:8080'
    })
  ]
}
