const path = require('path');

module.exports = {
  entry: "./js/dashboard_main",
  mode: "production",
  output: {
    path:path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
}
