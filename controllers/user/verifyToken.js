const { usersService } = require('../../services');

const verifyToken = async (req, res, next) => {
  const { verifyToken } = req.params;
  const findOne = await usersService.findUser(verifyToken);
  try {
    if (!findOne) {
      res
        .status(404)
        .json({ status: 'error', code: 404, messasge: 'User not found' });
      return;
    }
    const { id } = findOne;
    await usersService.updateUser(id, {
      verifyToken: null,
      verify: true,
    });
    res.json({
      status: 'success',
      code: 200,
      message: 'Email successfully verified',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = verifyToken;
