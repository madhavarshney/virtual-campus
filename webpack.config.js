const path = require('path');
const Stylish = require('webpack-stylish');
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = process.env.NODE_ENV || 'development';
const base = process.env.BASE_PATH || '/';
const prod = mode === 'production';

const stats = {
  all: false,
  colors: true,
  errors: true,
  warnings: true,
  logging: 'warn',
};
const templateParams = {
  title: 'Virtual Campus',
  // NOTE: the following are custom parameters / this usage may break in the future
  description: `An easy-to-use information center for Foothill's virtual campus.`,
  websiteUrl: base,
};

module.exports = {
  mode,
  entry: {
    home: ['./src/home/home.css', './src/home/home.js'],
    clubs: ['./src/clubs/clubs.css', './src/clubs/clubs.js'],
    clubday: ['./src/clubday/clubday.css', './src/clubday/clubday.js'],
    tour: ['./src/tour/tour.css', './src/tour/tour.js'],
  },
  devtool: prod ? false : 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: prod ? '[name].[contenthash:8].js' : '[name].js',
    publicPath: base,
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: './src/ejs-loader',
        options: {
          beautify: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          // prod ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: !prod } },
          { loader: 'postcss-loader', options: { sourceMap: !prod } },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  stats,
  devServer: {
    stats,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new Stylish(),
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
    new HtmlWebpackPlugin({
      chunks: ['home'],
      template: 'src/home/home.html',
      filename: 'index.html',
      ...templateParams,
    }),
    new HtmlWebpackPlugin({
      chunks: ['clubs'],
      template: 'src/clubs/clubs.html',
      filename: 'clubs/index.html',
      ...templateParams,
    }),
    new HtmlWebpackPlugin({
      chunks: ['clubday'],
      template: 'src/clubday/clubday.html',
      filename: 'club-day/index.html',
      ...templateParams,
    }),
    new HtmlWebpackPlugin({
      chunks: ['tour'],
      template: 'src/tour/tour.html',
      filename: 'tour/index.html',
      ...templateParams,
    }),
    new MiniCssExtractPlugin({
      filename: prod ? '[name].[contenthash:8].css' : '[name].css',
    }),
    prod && new OptimizeCssAssetsPlugin(),
    prod &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      }),
  ].filter(Boolean),
};
