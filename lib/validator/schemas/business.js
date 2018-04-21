'use strict';

const rules = require('./../rules');

let createBusiness = {
  properties: {
    name: rules.name(true)
  }
};

let getAllBusinesses = {
  properties: {
    pageSize: rules.pageSize,
    skip: rules.skip
  }
};

let getBusinessById = {
  properties: {
    id: rules.businessId
  }
};

let updateBusiness = {
  properties: {
    id: rules.businessId,
    name: rules.name(true)
  }
};

let deleteBusiness = {
  properties: {
    id: rules.businessId
  }
};

let getClientsAssociatedToBusiness = {
  properties: {
    id: rules.businessId
  }
};

module.exports = {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getClientsAssociatedToBusiness
};
