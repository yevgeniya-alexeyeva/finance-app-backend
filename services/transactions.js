const { Transaction } = require('../model');

const create = async (userId, transaction) => {
  const result = await Transaction.create({ ...transaction, owner: userId });
  return result;
};
const getAll = async (owner) => {
  return Transaction.find({ owner });
};

module.exports = { create, getAll };
