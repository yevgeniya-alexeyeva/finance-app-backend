const User = require('../models/user');

const register = ({ password, ...rest }) => {
  const newUser = new User({ ...rest });
  newUser.setPassword(password);
  return newUser.save();
};

const findUser = (query) => {
  User.findOne({ query });
};
const updateUser = (id, update) => {
  User.findByIdAndUpdate(id, update, { useFindAndModify: false });
};

module.exports = { register, findUser, updateUser };
