const path = require("path");
const process = require("process");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: './src/index.ts', // Add this line
  output: { // Add this section
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Make sure this points to the correct template file
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    }),
    // ... other plugins
  ],
};
