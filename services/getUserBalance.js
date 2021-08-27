const { User } = require('../model');

const getUserBalance = async (id) => {
  const user = await User.findById(id);
  return user.balance;
};

module.exports = getUserBalance;
