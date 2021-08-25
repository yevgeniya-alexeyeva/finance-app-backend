const { transactions: service } = require('../../services');
const { usersService } = require('../../services');

const create = async (req, res, next) => {
  const { date, transactionType, comment, amount, categoryId } = req.body;
  const userId = req.user.id;
  let balanceAfter = 0;

  try {
    const { balance } = await usersService.findUser({
      _id: userId,
    });

    if (transactionType === 'withdrawal') {
      if (balance - amount < 0) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'Insufficient balance',
        });
      }
      balanceAfter = balance - amount;
    } else {
      balanceAfter = balance + amount;
    }

    await usersService.updateUser(userId, {
      balance: balanceAfter,
    });

    const { _doc } = await service.create(userId, {
      date,
      transactionType,
      comment,
      amount,
      category: categoryId,
      balanceAfter,
    });

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        date,
        id: _doc._id,
        transactionType,
        categoryId,
        comment,
        amount,
        balance: balanceAfter,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = create;
