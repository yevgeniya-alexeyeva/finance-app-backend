const { Category } = require('../model');

const getAll = async () => {
  const result = await Category.find();
  return result;
};

module.exports = { getAll };