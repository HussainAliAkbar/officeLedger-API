'use strict';

const models = require('../models');

module.exports = {
  findByCriteria,
  save,
  deleteByCriteria
};

function findByCriteria(criteria) {
  return models.BusinessClient().find(criteria);
}

function save(payload) {
  return models.BusinessClient(payload).save();
}

function deleteByCriteria(criteria) {
  return new models.BusinessClient(criteria).deleteObject();
}
