'use strict';
const repos = require('../repositories');
const errorHelper = require('../errors');
const validator = require('../validator');
const validationSchemas = require('../validator/schemas');
const messages = require('../messages');

module.exports = {
  createTransaction,
  getAllBusinessTransactions,
  getTransactionById,
  settleTransaction,
  deleteTransaction
};

async function createTransaction(payload) {

  // validate payload
  await _validatePayload(payload, validationSchemas.transaction.createTransaction);

  // check if businessClientId exists
  let businessClient = await repos.businessClient.findByCriteria({id: payload.businessClientId});
  if (!businessClient.length) throw new errorHelper.BadRequestError(messages.transaction.businessClientDoesNotExist);

  // insert the new transaction in the database
  let resp = await repos.transaction.save(payload);
  if (!resp[0].insertId) throw new errorHelper.InternalServerError(messages.transaction.errorWhileAddingTransaction);

  // send response
  return {
    message: messages.transaction.successCreate,
    id: resp[0].insertId
  };
}

async function getAllBusinessTransactions(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.transaction.getAllBusinessTransactions);

  // check if businessId exists
  let business = await repos.business.findByCriteria({id: payload.businessId});
  if (!business.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);

  // find all transactions by businessId

  let transactions = await repos.transaction.getTransactionsByBusinessId(payload);
  if (!transactions) throw new errorHelper.InternalServerError(messages.transaction.couldNotFetch);


  return {
    transactions
  };
}


async function getTransactionById(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.transaction.getTransactionById);
  //  get transaction by id
  let transaction = await repos.transaction.getTransactionByTransactionId({transactionId: payload.transactionId});
  if (!transaction.length) throw new errorHelper.BadRequestError(messages.transaction.invalidTransactionId);

  // send response
  return {
    transaction: transaction[0]
  }
}


async function settleTransaction(payload) {
  return Promise.resolve(1);
}


async function deleteTransaction(payload) {
  return Promise.resolve(1);
}

async function _validatePayload(payload, schema) {
  let result = await validator.validatePayload(payload, schema);
  if (!result.valid) throw new errorHelper.BadRequestError(result.errors.map(obj => obj.message).join(','));
  return Promise.resolve();
}