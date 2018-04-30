'use strict';
const repos = require('../repositories');
const errorHelper = require('../errors');
const validator = require('../validator');
const validationSchemas = require('../validator/schemas');
const messages = require('../messages');

module.exports = {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getClientsAssociatedToBusiness
};

async function createBusiness(payload) {

  // validate payload
  await _validatePayload(payload, validationSchemas.business.createBusiness);

  // check if name previously exists
  let business = await repos.business.findByCriteria({name: payload.name});
  if (business.length) throw new errorHelper.BadRequestError(messages.business.nameExists);

  // insert the new business in the database
  let resp = await repos.business.save(payload);
  if (!resp[0].insertId) throw new errorHelper.InternalServerError(messages.business.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.business.successCreate,
    id: resp[0].insertId
  };
}

async function getAllBusinesses(payload) {

  // validate payload
  await _validatePayload(payload, validationSchemas.business.getAllBusinesses);

  // get all businesses
  let businesses = await repos.business.getAll(payload.skip, payload.pageSize);

  // send response
  return {
    businesses
  }
}

async function getBusinessById(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.business.getBusinessById);

  //  get business by id
  let business = await repos.business.findByCriteria({id: payload.id});
  if (!business.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);

  // send response
  return {
    business: business[0]
  }
}

async function updateBusiness(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.business.updateBusiness);

  // check if name previously exists
  let business = await repos.business.findByCriteria({name: payload.name});
  if (business.length) throw new errorHelper.BadRequestError(messages.business.nameExists);

  // update business in the database
  let resp = await repos.business.save(payload);
  if (!resp[0].insertId) throw new errorHelper.InternalServerError(messages.business.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.business.successUpdate,
    id: resp[0].insertId
  };
}

async function deleteBusiness(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.business.deleteBusiness);

  // check if business exists
  let business = await repos.business.findByCriteria({id: payload.id});
  if (!business.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);

  // delete business
  let resp = await repos.business.deleteByCriteria({id: payload.id});
  if (!resp) throw new errorHelper.InternalServerError(messages.business.couldNotAddOrUpdate);

  // send response
  return {
    message: messages.business.successDelete
  };
}

async function getClientsAssociatedToBusiness(payload) {
  // validate payload
  await _validatePayload(payload, validationSchemas.business.getClientsAssociatedToBusiness);

  // check if business exists
  let business = await repos.business.findByCriteria({id: payload.id});
  if (!business.length) throw new errorHelper.BadRequestError(messages.business.invalidBusinessId);

  // fetch associated clients from the database
  let resp = await repos.businessClient.findByCriteria({businessId: payload.id});
  if (!resp) throw new errorHelper.InternalServerError(messages.business.couldNotFetch);

  // send response
  return {
    clients: resp
  };
}

async function _validatePayload(payload, schema) {
  let result = await validator.validatePayload(payload, schema);
  if (!result.valid) throw new errorHelper.BadRequestError(result.errors.map(obj => obj.message).join(','));
  return Promise.resolve();
}