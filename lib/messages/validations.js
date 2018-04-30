'use strict';

module.exports = {
  name: {
    type: 'name should be a string',
    required: 'name is required'
  },
  pageSize: {
    type: 'page size should be an integer',
    minimum: 'pageSize cannot be less than 0'

  },
  skip: {
    type: 'Skip should be an integer',
    minimum: 'Skip cannot be less than 0'
  },
  businessId: {
    type: 'Business id should be an integer',
    required: 'Business id is required'
  },
  transactionId: {
    type: 'Transaction Id should be an integer',
    required: 'TransactionId id is required'
  },
  clientId: {
    type: 'Client id should be an integer',
    required: 'Client id is required'
  },
  businessClientId: {
    type: 'businessClient id should be an integer',
    required: 'businessClientId is required'
  },
  generalStringValidation: {
    type: (variableName) => {
      return `${variableName} should be a string`;
    },
    required: (variableName) => {
      return `${variableName} is required`;
    }
  },
  generalIntValidation: {
    type: (variableName) => {
      return `${variableName} should be an integer`;
    },
    required: (variableName) => {
      return `${variableName} is required`;
    }
  },
  isPaid: {
    type: 'isPaid should be a number',
    required: 'isPaid is required',
    allowEmpty: 'isPaid cannot be empty',
    enum: 'isPaid can only be 0 (not paid) or 1 (paid)'
  },
  paymentMethod: {
    type: 'paymentMethod should be a string',
    required: 'paymentMethod is required',
    allowEmpty: 'paymentMethod cannot be empty',
    enum: 'paymentMethod  can only be cash or cheque'
  }
};
