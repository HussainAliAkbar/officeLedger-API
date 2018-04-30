'use strict';

const messages = require('../messages/index');
const constants = require('../constants/index');

// TODO: add regex for alphabets
const name = (isRequired) => {
  return {
    type: 'string',
    required: isRequired,
    // pattern: '/^[A-Za-z]+$/',
    messages: {
      type: messages.validation.name.type,
      required: messages.validation.name.required
    }
  };
};

const generalStringValidation = (variableName, isRequired) => {
  return {
    type: 'string',
    required: isRequired,
    // pattern: '/^[A-Za-z]+$/',
    messages: {
      type: messages.validation.generalStringValidation.type(variableName),
      required: messages.validation.generalStringValidation.required(variableName)
    }
  };
};

const generalIntValidation = (variableName, isRequired) => {
  return {
    type: 'integer',
    required: isRequired,
    messages: {
      type: messages.validation.generalIntValidation.type(variableName),
      required: messages.validation.generalIntValidation.required(variableName)
    }
  };
};

const skip = {
  type: 'integer',
  minimum: 0,
  messages: {
    type: messages.validation.skip.type,
    minimum: messages.validation.skip.minimum
  }
};
//
const pageSize = {
  type: 'integer',
  minimum: 0,
  messages: {
    type: messages.validation.pageSize.type,
    minimum: messages.validation.pageSize.minimum
  }
};

const businessId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.businessId.type,
    required: messages.validation.businessId.required
  }
};

const transactionId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.transactionId.type,
    required: messages.validation.transactionId.required
  }
};

const clientId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.clientId.type,
    required: messages.validation.clientId.required
  }
};

const businessClientId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.businessClientId.type,
    required: messages.validation.businessClientId.required
  }
};

const isPaid = {
  type: 'integer',
  required: true,
  allowEmpty: false,
  enum: [
    constants.transaction.isPaid.paid,
    constants.transaction.isPaid.notPaid
  ],
  messages: {
    type: messages.validation.isPaid.type,
    required: messages.validation.isPaid.required,
    allowEmpty: messages.validation.isPaid.allowEmpty,
    enum: messages.validation.isPaid.enum
  }
};

const paymentMethod = (isRequired) => {
  return {
    type: 'integer',
    required: isRequired,
    enum: [
      constants.transaction.paymentMethod.cash,
      constants.transaction.paymentMethod.cheque
    ],
    messages: {
      type: messages.validation.paymentMethod.type,
      required: messages.validation.paymentMethod.required,
      allowEmpty: messages.validation.paymentMethod.allowEmpty,
      enum: messages.validation.paymentMethod.enum
    }
  };
};

module.exports = {
  name,
  pageSize,
  skip,
  businessId,
  transactionId,
  clientId,
  businessClientId,
  isPaid,
  paymentMethod,
  generalStringValidation,
  generalIntValidation
};
