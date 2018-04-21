'use strict';

const services = require('../../lib/services');
const constants = require('../../lib/constants');

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  addClientToBusiness,
  deleteClientFromBusiness
};

function createClient(req, res, next) {
  let payload = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    contactPersonName: req.body.contactPersonName,
    contactPersonEmail: req.body.contactPersonEmail,
    contactPersonNumber: req.body.contactPersonNumber
  };
  return services.client.createClient(payload)
    .then(res.json)
    .catch(res.json);
}

function getAllClients(req, res, next) {
  let payload = {
    skip: +req.query.skip || constants.common.pagination.skip,
    pageSize: +req.query.pageSize || constants.common.pagination.pageSize
  };

  return services.client.getAllClients(payload)
    .then(res.json)
    .catch(res.json);
}

function getClientById(req, res, next) {
  let payload = {
    id: +req.params.id
  };
  return services.client.getClientById(payload)
    .then(res.json)
    .catch(res.json);
}

function updateClient(req, res, next) {
  let payload = {
    id: +req.params.id,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    contactPersonName: req.body.contactPersonName,
    contactPersonEmail: req.body.contactPersonEmail,
    contactPersonNumber: req.body.contactPersonNumber
  };
  return services.client.updateClient(payload)
    .then(res.json)
    .catch(res.json);
}

function deleteClient(req, res, next) {
  let payload = {
    id: +req.params.id
  };
  return services.client.deleteClient(payload)
    .then(res.json)
    .catch(res.json);
}

function addClientToBusiness(req, res, next) {
  let payload = {
    clientId: +req.params.id,
    businessId: +req.params.businessId
  };
  return services.client.addClientToBusiness(payload)
    .then(res.json)
    .catch(res.json);
}

function deleteClientFromBusiness(req, res, next) {
  let payload = {
    clientId: +req.params.id,
    businessId: +req.params.businessId
  };
  return services.client.deleteClientFromBusiness(payload)
    .then(res.json)
    .catch(res.json);
}
