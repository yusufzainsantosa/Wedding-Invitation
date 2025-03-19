const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Now "@/assets" refers to "src/assets"
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SCSS files
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles SCSS to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: 'body', // Inject scripts at the bottom of the <body>
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: false,
  },
};
