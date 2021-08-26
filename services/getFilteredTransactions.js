const { Transaction } = require('../model');

const getFilteredTransactions = async (id, month, year) => {
  {
    const data = await Transaction.find({ owner: id, data: { month, year } });
    return data;
  }
};

module.exports = getFilteredTransactions;
