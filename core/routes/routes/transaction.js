'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.post('/', controllers.transaction.createTransaction);

router.get('/business/:businessId', controllers.transaction.getAllBusinessTransactions);

router.get('/:id', controllers.transaction.getTransactionById);

router.put('/:id', controllers.transaction.settleTransaction);

router.delete('/:id', controllers.transaction.deleteTransaction);

module.exports = router;
