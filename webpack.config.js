module.exports = {
  devtool: "source-map",
  output: {
    assetModuleFilename: "images/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|png|jpeg|jpg)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
    ],
  },
};
