const express = require('express');
const router = express.Router();
const { user } = require('../../controllers');

router.post('/signup', user.register);

router.get('/verify/:verifyToken', user.verifyToken);
router.post('/verify', user.resendVerifyEmail);

module.exports = { router };
