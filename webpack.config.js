const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { // If an extension is .ts,
        test: /\.ts$/,
        // compile TypeScript.
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // unnecessary to write the extension in import statement
  resolve: {
    extensions: ['.ts', '.js']
  },
  // webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true
  }
};

module.exports = config;