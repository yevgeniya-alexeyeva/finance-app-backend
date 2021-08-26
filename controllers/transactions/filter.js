const { categories } = require('../../services');

const getFilteredTransactions = require('../../services/getFilteredTransactions');

const filter = async (req, res, next) => {
  const { _id: id } = req.user;
  const { month, year } = req.params;
  console.log(
    '🚀 ~ file: filter.js ~ line 8 ~ filter ~ month, year',
    req.params
  );

  try {
    const categoriesList = await categories.getAll();

    const costs = await getFilteredTransactions(id, month, year);
    console.log('🚀 ~ file: filter.js ~ line 15 ~ filter ~ costs', costs);
    const filteredCosts = categoriesList.map(({ name }) => {
      //   const cost = await;
      return { category: name };
    });

    res.json({
      status: 'success',
      code: 200,
      data: {
        filteredCosts,
      },
    });
  } catch (error) {
    console.log('🚀 ~ file: filter.js ~ line 30 ~ filter ~ error', error);

    next(error);
  }
};

module.exports = filter;
