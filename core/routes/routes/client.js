'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.post('/', controllers.client.createClient);

router.get('/', controllers.client.getAllClients);

router.get('/:id', controllers.client.getClientById);

router.put('/:id', controllers.client.updateClient);

router.delete('/:id', controllers.client.deleteClient);

router.post('/:id/addToBusiness/:businessId', controllers.client.addClientToBusiness);

router.delete('/:id/deleteFromBusiness/:businessId', controllers.client.deleteClientFromBusiness);

module.exports = router;
