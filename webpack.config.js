'use strict';

const path = require('path');
const ShakePlugin = require('webpack-common-shake').Plugin;

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

module.exports = [{
  entry: path.join(SRC, 'main.js'),
  output: {
    path: DIST,
    filename: 'no-shake.js'
  }
}, {
  entry: path.join(SRC, 'main.js'),
  output: {
    path: DIST,
    filename: 'shake.js'
  },
  plugins: [
    new ShakePlugin({
      onGraph: process.env.SHAKE_GRAPH ? (dot) => {
        fs.writeFileSync(process.env.SHAKE_GRAPH, dot);
      } : false
    })
  ]
}];
