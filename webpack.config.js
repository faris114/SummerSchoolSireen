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
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: "/dist",
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

// loaders: [
// {
//     test: /.jsx?$/,
//     loader: "babel-loader",
//     exclude: /node_modules/
//   },
//   {
//     test: /\.css$/,
//     loader: "style-loader!css-loader"
//   },
//   {
//     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//     loader: "url-loader?limit=100000"
//   }
// ],
