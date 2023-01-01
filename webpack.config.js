const path = require("path");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "tools"),
  entry: {
    "button-template": "./button-template.js",
    "languages-generator": "./languages-generator.js",
    "themes-generator": "./themes-generator.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
