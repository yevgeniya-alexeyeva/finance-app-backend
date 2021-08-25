const express = require('express');
const router = express.Router();
const middle = require('../../middlewares');
const { transactions: ctrl } = require('../../controllers');

router.post('/', middle.verifyToken, ctrl.create);

module.exports = { router };
