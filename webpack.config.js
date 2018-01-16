const webpack = require('webpack');
const minifier = require('minifier');
const card = require('./webpack.config.data.js');
const home = require('./webpack.config.home.js');
const findings = require('./webpack.config.about.js');

let input, options;

input = ['./src/css/grid.css', './src/css/navbar.css'];
options = {
  output: "proto-app-style.min.css"
}
minifier.minify(input, options);

module.exports = [
  card, home, findings
];
