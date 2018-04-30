'use strict';
const general = require('./general');
const validation = require('./validations');
const business = require('./business');
const client = require('./client');
const transaction = require('./transaction');

module.exports = {
  general,
  validation,
  business,
  client,
  transaction
};
