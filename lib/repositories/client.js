'use strict';

const models = require('../models');

module.exports = {
  findByCriteria,
  save,
  getAll,
  deleteByCriteria
};

function findByCriteria(criteria) {
  return models.Client().find(criteria);
}

function save(payload) {
  return models.Client(payload).save();
}

function getAll(skip, pageSize) {

  // This can be done in 2 ways. One is this and the other is commented below.
  let client = new models.Client().getClientWithTableReference();
  return client.orderBy('id', 'asc').limit(pageSize).offset(skip);

  //
  // let business = new models.Client();
  // return client.getClient()
  //   .from(client.tableName)
  //   .limit(pageSize)
  //   .offset(skip);
}

function deleteByCriteria(criteria) {
  return new models.Client(criteria).deleteObject();
}
