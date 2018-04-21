'use strict';

const config = require('../config');
const orm = require('storehouse');

// models will contain data dependent classes
var db = orm.initialize({
  client: 'mysql',
  host: config.get('mysql.host'),
  port: 3306,
  db: config.get('mysql.name'),
  uid: config.get('mysql.username'),
  pwd: config.get('mysql.password'),
  isMultiStatement: true,
  charset: 'utf8mb4'
});

module.exports = db;
