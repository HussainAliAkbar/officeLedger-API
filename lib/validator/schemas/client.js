'use strict';

const rules = require('./../rules');

let createClient = {
  properties: {
    name: rules.generalStringValidation('Name', true),
    email: rules.generalStringValidation('Email', false),
    phoneNumber: rules.generalStringValidation('Phone Number', false),
    contactPersonName: rules.generalStringValidation('Contact Person Name', false),
    contactPersonEmail: rules.generalStringValidation('Contact Person Email', false),
    contactPersonNumber: rules.generalStringValidation('Contact Person Number', false)
  }
};

let getAllClients = {
  properties: {
    pageSize: rules.pageSize,
    skip: rules.skip
  }
};

let getClientById = {
  properties: {
    id: rules.clientId
  }
};

let updateClient = {
  properties: {
    id: rules.clientId,
    name: rules.generalStringValidation('Name', true),
    email: rules.generalStringValidation('Email', false),
    phoneNumber: rules.generalStringValidation('Phone Number', false),
    contactPersonName: rules.generalStringValidation('Contact Person Name', false),
    contactPersonEmail: rules.generalStringValidation('Contact Person Email', false),
    contactPersonNumber: rules.generalStringValidation('Contact Person Number', false)
  }
};

let deleteClient = {
  properties: {
    id: rules.clientId
  }
};

let addClientToBusiness = {
  properties: {
    clientId: rules.clientId,
    businessId: rules.businessId
  }
};

let deleteClientFromBusiness = {
  properties: {
    clientId: rules.clientId,
    businessId: rules.businessId
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  addClientToBusiness,
  deleteClientFromBusiness
};
