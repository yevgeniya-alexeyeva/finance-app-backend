const { usersService } = require('../../services');
const logout = async (req, res, next) => {
  const user = req.user;
  const token = null;
  try {
    await usersService.updateUser(user.id, { token });
    res.json({
      status: 'success',
      code: 204,
      message: 'User logged out',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
