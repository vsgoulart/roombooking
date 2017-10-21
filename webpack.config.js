"use strict";

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const vendor = ["react", "react-dom", "redux", "react-redux", "whatwg-fetch"];
let devtool = "eval-source-map";
const extensions = [".js", ".jsx", ".css", ".scss", ".json"];
let plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ["vendor", "manifest"]
  }),
  new HtmlWebpackPlugin({
    template: "src/index.html",
    chunksSortMode: "dependency"
  }),
  new ExtractTextPlugin({
    filename: "style.[contenthash].css",
    allChunks: true
  })
];

module.exports = (env = {}) => {
  if (env.prod) {
    devtool = "source-map";
  }

  if (env.analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: {
      bundle: "./src/index.js",
      vendor
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].[chunkhash].js"
    },
    module: {
      rules: [
        {
          use: "babel-loader",
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        {
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"]
          }),
          test: /\.s?css$/
        }
      ]
    },
    resolve: { extensions },
    plugins,
    devServer: {
      port: 8080,
      historyApiFallback: true
    }
  };
};
