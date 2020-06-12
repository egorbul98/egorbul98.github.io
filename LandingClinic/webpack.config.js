// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const packagejson = require('./package.json');
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    index: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
            loader: 'postcss-loader',
          options: {
            url: false,
              plugins: [
                autoprefixer({
                  overrideBrowserslist: packagejson.browserslist
                })
              ],
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './image',
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts',
              useRelativePath: true
            }
          },
        ],
      },
      // { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([{
        from: 'src/image',
        to: 'image'
      },
      {
        from: 'src/fonts',
        to: 'fonts'
      },
    ]),
  ],
  devtool: isDev ? "source-map" : "",
}
