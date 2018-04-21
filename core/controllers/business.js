'use strict';

const services = require('../../lib/services');
const constants = require('../../lib/constants');

module.exports = {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getClientsAssociatedToBusiness
};

function createBusiness(req, res, next) {
  let payload = {
    name: req.body.name
  };
  return services.business.createBusiness(payload)
    .then(res.json)
    .catch(res.json);
}

function getAllBusinesses(req, res, next) {
  let payload = {
    skip: +req.query.skip || constants.common.pagination.skip,
    pageSize: +req.query.pageSize || constants.common.pagination.pageSize
  };

  return services.business.getAllBusinesses(payload)
    .then(res.json)
    .catch(res.json);
}

function getBusinessById(req, res, next) {
  let payload = {
    id: +req.params.id
  };
  return services.business.getBusinessById(payload)
    .then(res.json)
    .catch(res.json);
}

function updateBusiness(req, res, next) {
  let payload = {
    id: +req.params.id,
    name: req.body.name

  };
  return services.business.updateBusiness(payload)
    .then(res.json)
    .catch(res.json);
}

function deleteBusiness(req, res, next) {
  let payload = {
    id: +req.params.id
  };
  return services.business.deleteBusiness(payload)
    .then(res.json)
    .catch(res.json);
}

function getClientsAssociatedToBusiness(req, res, next) {
  let payload = {
    id: +req.params.id
  };
  return services.business.getClientsAssociatedToBusiness(payload)
    .then(res.json)
    .catch(res.json);
}
