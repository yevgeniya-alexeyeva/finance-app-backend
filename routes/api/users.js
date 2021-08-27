const express = require('express');
const router = express.Router();
const { user } = require('../../controllers');
const middle = require('../../middlewares');
require('../../utils/passport-config');

router.post('/signup', middle.validateRegisterUser, user.register);
router.post('/login', middle.validateRegisterUser, user.login);
router.post('/logout', middle.verifyToken, user.logout);

router.get('/current', middle.verifyToken, user.getCurrentUser);
router.get('/balance', middle.verifyToken, user.balance);

router.get('/verify/:verifyToken', user.verifyToken);
router.post('/verify', middle.verifyToken, user.resendVerifyEmail);

module.exports = { router };
