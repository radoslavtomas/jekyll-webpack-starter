const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // watch: true,
  mode: 'production',
  devtool: 'eval',
  entry: './_webpack/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets')
  },
  resolve: {
    extensions: ['.json', '.js', '.scss'],
    modules: ['node_modules'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }]
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            // MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                sourceMap: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                postcssOptions: {
                        plugins: () => [
                            require('cssnano')(), // https://cssnano.co/
                            require('tailwindcss')()
                        ],
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                sourceMap: true
                }
            }
        ]
      }
    ]
  },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[name].css'
//     })
//   ]
};