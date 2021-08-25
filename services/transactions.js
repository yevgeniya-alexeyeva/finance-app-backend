const { Transaction } = require('../model');

const create = async (userId, transaction) => {
  const result = await Transaction.create({ ...transaction, owner: userId });
  return result;
};

module.exports = { create };
