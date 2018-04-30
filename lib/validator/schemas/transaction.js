'use strict';

const rules = require('./../rules');

let createTransaction = {
  properties: {
    isPaid: rules.isPaid,
    businessClientId: rules.businessClientId,
    amount: rules.generalIntValidation('Amount', true),
    // paymentDate: rules.paymentDate,
    paymentMethod: rules.paymentMethod(false),
    additionalDetails: rules.generalIntValidation('Additional Details', false)
  }
};

let getAllBusinessTransactions = {
  properties: {
    businessId: rules.businessId,
    pageSize: rules.pageSize,
    skip: rules.skip

  }
};

let getTransactionById = {
  properties: {
    transactionId: rules.transactionId
  }
};

let settleTransaction = {
  properties: {
    id: rules.transactionId,
    isPaid: rules.isPaid,
    amount: rules.generalIntValidation('Amount', false),
    // paymentDate: rules.paymentDate,
    paymentMethod: rules.paymentMethod(false),
    additionalDetails: rules.generalIntValidation('Additional Details', false)
  }
};

let deleteTransaction = {
  properties: {
    transactionId: rules.transactionId
  }
};

module.exports = {
  createTransaction,
  getAllBusinessTransactions,
  getTransactionById,
  settleTransaction,
  deleteTransaction
};
