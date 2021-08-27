const express = require('express');
const router = express.Router();
const middle = require('../../middlewares');
const {
  transactions: ctrl,
  categories: categoriesCtrl,
} = require('../../controllers');

router.post('/', middle.verifyToken, ctrl.create);
router.get('/', middle.verifyToken, ctrl.getTransactions);
router.get('/filter', middle.verifyToken, ctrl.filter);
router.post('/categories', middle.verifyToken, categoriesCtrl.getAll);

module.exports = { router };
