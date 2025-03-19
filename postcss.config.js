module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.html", "./src/**/*.js"], // Files to analyze
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [], // Extract CSS classes
      safelist: ["nav", "carousel"], // Safelist specific classes
    }),
  ],
};
