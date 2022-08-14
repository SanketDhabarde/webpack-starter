const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const webpackConfig = {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    open: true,
    hot: true,
    port: 3000,
  },
};

module.exports = merge(common, webpackConfig);
