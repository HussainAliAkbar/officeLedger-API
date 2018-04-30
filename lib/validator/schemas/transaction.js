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
  businessId: rules.businessId,
  pageSize: rules.pageSize,
  skip: rules.skip
};

let getTransactionById = {
  transactionId: rules.transactionId
};

module.exports = {
  createTransaction,
  getAllBusinessTransactions,
  getTransactionById
};
