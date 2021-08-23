const { validateUser } = require('../model/schemas/user');

const validateRegisterUser = (req, res, next) => {
  const error = validateUser(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    });
  }
  next();
};

module.exports = validateRegisterUser;
