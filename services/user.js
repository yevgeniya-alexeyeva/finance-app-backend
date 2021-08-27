const { User } = require('../model');

const register = ({ password, ...rest }) => {
  const newUser = new User({ ...rest });
  newUser.setPassword(password);
  return newUser.save();
};

const findUser = (query) => {
  return User.findOne(query);
};

const updateUser = (id, update) => {
  return User.findByIdAndUpdate(id, update, { useFindAndModify: false });
};

module.exports = { register, findUser, updateUser };
