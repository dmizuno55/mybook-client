module.exports = {
  context: __dirname,
  entry: [
    "./src/index.jsx",
    "./public/css/main.css",
    "./public/index.html",
  ],

  output: {
    path: __dirname + "/static",
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./[name].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./css/[name].[ext]"
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["react-hot-loader", "babel-loader"]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
