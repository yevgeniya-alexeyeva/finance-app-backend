const register = require('./register');
const verifyToken = require('./verifyToken');
const resendVerifyEmail = require('./resendVerifyEmail');
const login = require('./login');
const getCurrentUser = require('./getCurrentUser');
const logout = require('./logout');

module.exports = {
  register,
  verifyToken,
  resendVerifyEmail,
  login,
  getCurrentUser,
  logout,
};
