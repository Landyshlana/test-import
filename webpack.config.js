const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
     module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, 'css-loader',
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: 'main.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
      ],
};