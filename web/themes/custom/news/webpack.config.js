const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin') - тре пофіксити (не працює)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChumks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, 'src/favicon.ico'),
    //     to: path.resolve(__dirname, 'dist')
    //   }
    // ])
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   hmr: isDev,
            //   reloadAll: true
            // },
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   hmr: isDev,
            //   reloadAll: true
            // },
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   hmr: isDev,
            //   reloadAll: true
            // },
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    ]
  }
}
