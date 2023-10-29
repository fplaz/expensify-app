const path = require('path')

module.exports = {
  stats: {warnings:false},
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    historyApiFallback: true
  }
}