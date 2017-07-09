'use strict';

const fs = require('fs');
const path = require('path');
const ShakePlugin = require('webpack-common-shake').Plugin;
const OfflinePlugin = require('offline-plugin');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

module.exports = [
  {
    entry: path.join(SRC, 'main.js'),
    output: {
      path: DIST,
      filename: 'no-shake.js'
    },
    plugins: [new OfflinePlugin()]
  },
  {
    entry: path.join(SRC, 'main.js'),
    output: {
      path: DIST,
      filename: 'shake.js'
    },
    plugins: [
      new OfflinePlugin(),
      new ShakePlugin({
        onGraph: process.env.SHAKE_GRAPH
          ? dot => {
              fs.writeFileSync(process.env.SHAKE_GRAPH, dot);
            }
          : false
      })
    ]
  }
];
