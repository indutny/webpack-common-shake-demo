'use trict';

const crypto = require('crypto');

console.log(crypto.createHash('sha1').update('hello').digest('hex'));
