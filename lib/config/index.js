'use strict';

const convict = require('convict');
const path = require('path');

let conf = convict({
  env: {
    docs: 'Application Development environment',
    format: ['dev', 'local', 'prod'],
    default: 'local',
    env: 'NODE_ENV'
  },
  mysql: {
    host: {
      docs: 'Host for mysql',
      format: '*',
      default: 'localhost'
    },
    name: {
      docs: 'Db name',
      format: '*',
      default: 'test'
    },
    username: {
      docs: 'user name for db connection',
      format: '*',
      default: ''
    },
    password: {
      docs: 'password for db connection',
      format: '*',
      default: ''
    },
    port: {
      docs: 'port for connection',
      format: 'port',
      default: 3306
    },
    migrations: {},
    poolSize: {
      doc: 'Connection pool size',
      format: 'nat',
      default: 5
    }
  },
  email: {
    host: {
      docs: 'Smtp server',
      format: '*',
      default: 'smtp.office365.com'
    },
    port: {
      docs: 'Port',
      format: 'port',
      default: 587
    },
    address: {
      docs: 'email address',
      format: 'email',
      default: 'abc123@gmail.com'
    },
    password: {
      docs: 'password',
      format: '*',
      default: '123abc123'
    }
  }
});

// Get config according to current environment
let env = conf.get('env');

// Merge with default values (check convict module's npm page for precedence order)
conf.loadFile(path.resolve(__dirname + `/env/${env}.json`));

// Validate config
conf.validate({strict: true});

module.exports = conf;
