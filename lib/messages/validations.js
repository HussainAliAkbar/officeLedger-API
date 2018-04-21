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
  clientId: {
    type: 'Client id should be an integer',
    required: 'Client id is required'
  },
  generalStringValidation: {
    type: (variableName) => {
      return `${variableName} should be a string`;
    },
    required: (variableName) => {
      return `${variableName} is required`;
    }
  }
};
