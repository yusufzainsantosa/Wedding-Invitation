const path = require("path");
const glob = require("glob"); // Required for PurgeCSSPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin"); // Correct import

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    filename: "[name].bundle.js",
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
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass/SCSS to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Match image files
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: {
                list: [
                  {
                    tag: "img",
                    attribute: "src",
                    type: "src",
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        // Minify JavaScript
        parallel: true,
        terserOptions: {
          compress: true,
          mangle: true,
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(), // Minifies CSS
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["imagemin-mozjpeg", { quality: 50, progressive: true }], // Remove metadata from JPEGs
              ["imagemin-pngquant", { quality: [0.6, 0.8], strip: true }], // Remove metadata from PNGs
              ["gifsicle", { interlaced: true }], // Compress GIF images
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }), // Second instance: Use sharpMinify for modern formats
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              webp: {
                quality: 20, // Adjust quality (0-100)
                lossless: false, // Use lossy compression
                alphaQuality: 100, // Preserve transparency quality
              },
              avif: {
                quality: 20, // Adjust quality (0-100)
                lossless: false, // Use lossy compression
              },
            },
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Your HTML template
      inject: "body", // Inject scripts at the bottom of the <body>
    }),
    // new BundleAnalyzerPlugin(), // Analyzes bundle size
    new MiniCssExtractPlugin({
      filename: "[name].min.css", // Outputs minified CSS files
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }), // Analyze all files in src
      safelist: ["nav", "carousel"], // Safelist specific classes
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
