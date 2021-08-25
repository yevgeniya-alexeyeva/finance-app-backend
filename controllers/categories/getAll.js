const { categories: service } = require('../../services');

const getAll = async (_, res, next) => {
  try {
    const categories = await service.getAll();
    const categorylist = categories.map(({name, _id}) => {
      return {
        id: _id,
        name,
      }
    });

    res.json({
      status: 'success',
      code: 200,
      data: {
        categorylist,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getAll;
