// Load all the default config:
const _ = require('lodash');
const defaults = require('./wdio.conf.js').config;

// 'e2' specific overrides:
const overrides = {
  baseUrl: 'https://www.johnlewis.com/',
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);