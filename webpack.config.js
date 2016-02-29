var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry : { app: './src/js/app.js' },
  output : { filename : './public/js/app.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]='+path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/')
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|otf|ttf|svg)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [{ from: './src/', to: './public/' }],
      {ignore: ['*.js', '*.jsx', '*.scss']}
    ),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devtool: 'source-map',
}
