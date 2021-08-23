const { userSchema } = require('./schema');
const { model } = require('mongoose');

const User = model('user', userSchema);

module.exports = User;
