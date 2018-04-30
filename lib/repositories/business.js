'use strict';

const models = require('../models');

module.exports = {
  findByCriteria,
  save,
  getAll,
  deleteByCriteria
};

function findByCriteria(criteria) {
  return models.Business().find(criteria);
}

function save(payload) {
  return models.Business(payload).save();
}

function getAll(skip, pageSize) {

  // This can be done in 2 ways. One is this and the other is commented below.
  let client = new models.Business().getClientWithTableReference();
  return client
    .orderBy('id', 'asc')
    .limit(pageSize)
    .offset(skip);

    //
    // let business = new models.Business();
    // return business.getClient()
    //   .from(business.tableName)
    //   .limit(pageSize)
    //   .offset(skip);
}

function deleteByCriteria(criteria) {
  return new models.Business(criteria).deleteObject();
}

//
// function getBusinessById(id) {
//   let params = [id];
//   let query = ' select * from businesses id = ? ; ';
//   return new models.Business().getClient().raw(query, params)
//         .then((data) => {
//           return data;
//         });
//
// }

//
// function saveInBatch(payload) {
//   return new models.Business(payload).saveInBatch();
// }
