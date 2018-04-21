'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.post('/', controllers.business.createBusiness);

router.get('/', controllers.business.getAllBusinesses);

router.get('/:id', controllers.business.getBusinessById);

router.put('/:id', controllers.business.updateBusiness);

router.delete('/:id', controllers.business.deleteBusiness);

router.get('/:id/associatedClients', controllers.business.getClientsAssociatedToBusiness);

module.exports = router;
