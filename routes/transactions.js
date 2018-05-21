const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions');

router.get('/accounts/:account_id/transactions', transactionsController.index);
router.get('/accounts/:account_id/transactions', transactionsController.show);
router.post('/accounts/:account_id/transactions', transactionsController.create);

module.exports = router;
