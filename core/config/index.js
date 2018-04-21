'use strict';

const path = require('path');
const convict = require('convict');

let config = convict({
  env: {
    docs: 'Application development Environment',
    format: ['dev', 'prod', 'local'],
    default: 'local',
    env: 'NODE_ENV'
  },
  port: {
    docs: 'Default port on which the app runs',
    format: 'port',
    default: 3000
  },
  isReqResLogEnabled: {
    docs: 'Request / Response logger bit',
    format: '*',
    default: false
  },
  logs: {
    token: {
      doc: 'Loggly token',
      format: String,
      default: ''
    },
    subdomain: {
      doc: 'Loggly subdomain',
      format: String,
      default: 'abc'
    },
    directory: {
      doc: 'Logs directory',
      format: String,
      default: path.join(__dirname, '../logs/')
    }
  }
});

// Get config according to current environment
let env = config.get('env');

config.loadFile(path.resolve(__dirname + `/env/${env}.json`));

// Validate config
config.validate({strict: true});

module.exports = config;

