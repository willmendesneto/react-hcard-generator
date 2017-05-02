var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

var browsers = [
  'ie >= 10',
  'last 2 versions',
  'iOS >= 6.1',
  'Android >= 5',
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  cssnext: {
    browsers: browsers,
  },
  plugins: [
    new ProgressBarPlugin(),
    new OfflinePlugin({
      responseStrategy: 'network-first',
      autoUpdate: true,
      externals: ['index.html'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1000',
      },
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]' +
          '[hash:base64:5]!postcss-loader'
        ),
      },
    ],
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-cssnext')({ browsers }),
    ];
  },
};
