const { Transaction } = require('../model');

const getFilteredTransactions = async (id, month, year) => {
  {
    const data = await Transaction.find({
      owner: id,
      'date.year': year,
      'date.month': month,
    });

    return data;
  }
};

module.exports = getFilteredTransactions;
