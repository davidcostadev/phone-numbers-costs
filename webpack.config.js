const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const server = require('./server');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
  chunksSortMode: 'dependency',
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, './static'),
    to: 'static',
    ignore: ['.*'],
  },
]);

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash].js',
  },
  devServer: {
    contentBase: './dist',
    before: server,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devtool: 'source-map',
  plugins: [
    CleanWebpackPluginConfig,
    CopyWebpackPluginConfig,
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
