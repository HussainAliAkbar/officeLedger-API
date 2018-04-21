'use strict';

const config = require('../config');
const bunyan = require('bunyan');
// const Loggly = require('bunyan-loggly');
const path = require('path');
const mkdirp = require('mkdirp');

const logDir = config.get('logs.directory');

mkdirp(logDir, (err) => {
  if (err) {
    throw err;
  }
});

let logStreams = [{
  level: 'info',
  stream: process.stdout
}, {
  level: 'debug',
  path: path.join(logDir, 'debug.log'),
  type: 'rotating-file',
  period: '1d'
}, {
  level: 'error',
  path: path.join(logDir, 'error.log')
}];

// if (config.get('env') !== 'development') {
//   logStreams.push({
//     level: 'info',
//     type: 'raw',
//     stream: new Loggly({
//       token: config.get('logs.token'),
//       subdomain: config.get('logs.subdomain')
//     })
//   });
// }

let log = bunyan.createLogger({
  name: 'officeLedger',
  target: config.get('env'),
  serializers: bunyan.stdSerializers,
  streams: logStreams
});

module.exports = log;
