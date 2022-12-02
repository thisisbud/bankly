const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  devtool: 'eval',
  devServer: {
    compress: true,
    port: 3001,
    hot: true
  },
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  resolve: {
    extensions: [
      '.js', '.ts', '.jsx', '.tsx', '.json',
    ],
    modules: ['src', 'node_modules']
  }
}

module.exports = config
