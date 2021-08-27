const { transactions: service } = require('../../services');

const getTransactions = async (req, res, next) => {
  const { _id: userId } = req.user;

  try {
    const result = await service.getAll(userId);
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: "No such user's collection",
      });
    }
    res.json({
      status: 'success',
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTransactions;
