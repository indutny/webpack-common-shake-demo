'use strict';

const crypto = require('crypto');

require('offline-plugin/runtime').install();

console.log(crypto.createHash('sha1').update('hello').digest('hex'));
