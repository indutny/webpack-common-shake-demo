'use trict';

const crypto = require('crypto');

crypto.createHash('sha1').update('hello').digest('hex');
