const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src")
];

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/main.js']
  },

  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.react.js', ".sass"]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
