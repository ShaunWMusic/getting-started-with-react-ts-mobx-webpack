const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**
 * To get started you only need to understand its Core Concepts:
 * Entry
 * Output
 * Loaders
 * Plugins
 * Mode
 * Browser Compatibility
 * addtionally you want to learn about resolve
 */

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src", "index.tsx"),
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
        options: {
          configFile: path.resolve(__dirname, "tsconfig.webpack.json")
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // Creates style nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader" // Compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, ".", "./src", "index.html")
    }),
    new webpack.ProgressPlugin()
  ],
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
    port: 4200,
    open: true,
    onListening(server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    }
  }
};
