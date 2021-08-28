const { Transaction } = require('../model');

const create = async (userId, transaction) => {
  const result = await Transaction.create({ ...transaction, owner: userId });
  return result;
};

const getAll = async (owner) => {
  return Transaction.find({ owner });
};

const getFilteredTransactions = async (id, month, year) => {
  if (!month) {
    const data = await Transaction.find({
      owner: id,
      'date.year': year,
    });
    return data;
  }

  const data = await Transaction.find({
    owner: id,
    'date.year': year,
    'date.month': month,
  });

  return data;
};

module.exports = { create, getAll, getFilteredTransactions };
