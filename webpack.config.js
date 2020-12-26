const path = require('path');

module.exports = {
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
  }
};