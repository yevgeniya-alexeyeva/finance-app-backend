const { getUserBalance } = require('../../services');

const balance = async (req, res, next) => {
  const id = req.user;
  try {
    const userBalance = await getUserBalance(id);

    res.json({
      status: 'success',
      code: 200,
      data: {
        userBalance,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = balance;
