'use strict';

const services = require('../../lib/services');
const constants = require('../../lib/constants');
const moment = require('moment');

module.exports = {
  createTransaction,
  getAllBusinessTransactions,
  getTransactionById,
  settleTransaction,
  deleteTransaction
};

function createTransaction(req, res, next) {
  let payload = {
    isPaid: +req.body.isPaid,
    businessClientId: +req.body.businessClientId,
    amount: +req.body.amount,
    paymentDate: req.body.paymentDate,
    paymentMethod: req.body.paymentMethod,
    additionalDetails: req.body.additionalDetails
  };
  return services.transaction.createTransaction(payload)
    .then(res.json)
    .catch(res.json);
}

function getAllBusinessTransactions(req, res, next) {
  // only businessId is required. The rest are optional paramters.

  let payload = {
    businessId: +req.params.businessId,
    skip: +req.query.skip || constants.common.pagination.skip,
    pageSize: +req.query.pageSize || constants.common.pagination.pageSize,
    isPaid: +req.query.isPaid,
    dateFrom: +req.query.dateFrom ? moment.utc(+req.query.dateFrom).format('YYYY-MM-DD') : undefined,
    dateTo: +req.query.dateTo ? moment.utc(+req.query.dateTo).format('YYYY-MM-DD') : undefined,
    clientId: +req.query.clientId
  };
  return services.transaction.getAllBusinessTransactions(payload)
    .then(res.json)
    .catch(res.json);
}

function getTransactionById(req, res, next) {
  let payload = {
    transactionId: +req.params.id
  };
  return services.transaction.getTransactionById(payload)
    .then(res.json)
    .catch(res.json);
}

function settleTransaction(req, res, next) {
  let payload = {
    id: +req.params.id,
    isPaid: +req.body.isPaid,
    businessClientId: +req.body.businessClientId,
    amount: +req.body.amount,
    paymentDate: req.body.paymentDate,
    paymentMethod: req.body.paymentMethod,
    additionalDetails: req.body.additionalDetails
  };
  return services.transaction.settleTransaction(payload)
    .then(res.json)
    .catch(res.json);
}

function deleteTransaction(req, res, next) {
  let payload = {
    name: req.body.name
  };
  return services.transaction.deleteTransaction(payload)
    .then(res.json)
    .catch(res.json);
}
