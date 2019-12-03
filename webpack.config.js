const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    publicPath: "/dist",
    chunkFilename: "assetsBundle.js",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    port: 8080,
    compress: true,
    hot: true,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

// use: [
//   "file-loader",
//   {
//     loader: "image-webpack-loader",
//     options: {
//       bypassOnDebug: true, // webpack@1.x
//       disable: true // webpack@2.x and newer
//     }
//   }
// ]

// {

// }

// test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
// use: [
//   "url-loader?limit=100000",
//   "file-loader",
//   {
//     loader: "image-webpack-loader",
//     options: {
//       bypassOnDebug: true, // webpack@1.x
//       disable: true // webpack@2.x and newer
//     }
//   }
// ]
