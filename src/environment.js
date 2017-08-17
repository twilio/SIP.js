"use strict";
var extend = require('util')._extend;

extend(exports, require('./environment_browser'));

extend(exports, {
  console: require('console'),
  timers: require('timers')
});
