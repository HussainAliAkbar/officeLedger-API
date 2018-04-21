'use strict';
const repos = require('../repositories');
const errorHelper = require('../errors');
const validator = require('../validator');
const validationSchemas = require('../validator/schemas');
const messages = require('../messages');

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  addClientToBusiness,
  deleteClientFromBusiness
};

async function createClient(payload) {

  // validate payload
  await _validatePayload(payload, validationSchemas.client.createClient);

  // check if name previously exists
  let client = await repos.client.findByCriteria({name: payload.name});
  if (client.length) throw new errorHelper.BadRequestError(messages.client.nameExists);

  // insert the new client in the database
  let resp = await repos.client.save(payload);
  if (!resp[0].insertId) throw new errorHelper.InternalServerError(messages.client.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.client.successCreate,
    id: resp[0].insertId
  };
}

async function getAllClients(payload) {

  // validate payload
  await _validatePayload(payload, validationSchemas.client.getAllClients);

  // get all clients
  let clients = await repos.client.getAll(payload.skip, payload.pageSize);

  // send response
  return {
    clients
  }
}

async function getClientById(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.client.getClientById);

  //  get client by id
  let client = await repos.client.findByCriteria({id: payload.id});
  if (!client.length) throw new errorHelper.BadRequestError(messages.client.invalidClientId);

  // send response
  return {
    client: client[0]
  }
}

async function updateClient(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.client.updateClient);

  // check if name previously exists
  let client = await repos.client.findByCriteria({name: payload.name});
  if (client.length) throw new errorHelper.BadRequestError(messages.client.nameExists);

  // update client in the database
  let resp = await repos.client.save(payload);
  if (!resp[0].insertId) throw new errorHelper.InternalServerError(messages.client.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.client.successUpdate,
    id: resp[0].insertId
  };
}

async function deleteClient(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.client.deleteClient);

  // check if client exists
  let client = await repos.client.findByCriteria({id: payload.id});
  if (!client.length) throw new errorHelper.BadRequestError(messages.client.invalidClientId);

  // delete client
  let resp = await repos.client.deleteByCriteria({id: payload.id});
  if (!resp) throw new errorHelper.InternalServerError(messages.client.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.client.successDelete
  };
}

async function addClientToBusiness(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.client.addClientToBusiness);

  // check if client and business exists and whether it is already added to the business or not
  let [clientResponse, businessResponse, businessClientResponse] = await Promise.all([
    repos.client.findByCriteria({id: payload.clientId}),
    repos.business.findByCriteria({id: payload.businessId}),
    repos.businessClient.findByCriteria({clientId: payload.clientId, businessId: payload.businessId})
  ]);

  if (!clientResponse.length) throw new errorHelper.BadRequestError(messages.client.invalidClientId);
  if (!businessResponse.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);
  if (businessClientResponse.length) throw new errorHelper.BadRequestError(messages.client.alreadyAssociatedWithBusiness);

  // add client to business
  let resp = await repos.businessClient.save({clientId: payload.clientId, businessId: payload.businessId});
  if (!resp) throw new errorHelper.InternalServerError(messages.client.couldNotAddOrRemoveToBusiness);

  // send response
  return {
    message: messages.client.successAddToBusiness
  };
}

async function deleteClientFromBusiness(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.client.deleteClientFromBusiness);

  // check if client and business exists and whether it is associated with the business or not
  let [clientResponse, businessResponse, businessClientResponse] = await Promise.all([
    repos.client.findByCriteria({id: payload.clientId}),
    repos.business.findByCriteria({id: payload.businessId}),
    repos.businessClient.findByCriteria({clientId: payload.clientId, businessId: payload.businessId})
  ]);

  if (!clientResponse.length) throw new errorHelper.BadRequestError(messages.client.invalidClientId);
  if (!businessResponse.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);
  if (!businessClientResponse.length) throw new errorHelper.BadRequestError(messages.client.notAssociatedWithBusiness);

  // delete client from business
  let resp = await repos.businessClient.deleteByCriteria({clientId: payload.clientId, businessId: payload.businessId});
  if (!resp) throw new errorHelper.InternalServerError(messages.client.couldNotAddOrRemoveToBusiness);

  // send response
  return {
    message: messages.client.successDeleteFromBusiness
  };
}

async function _validatePayload(payload, schema) {
  let result = await validator.validatePayload(payload, schema);
  if (!result.valid) throw new errorHelper.BadRequestError(result.errors.map(obj => obj.message).join(','));
  return Promise.resolve();
}