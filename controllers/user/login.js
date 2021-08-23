const jwt = require('jsonwebtoken');
require('dotenv').config();
const { usersService } = require('../../services');
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await usersService.findUser({ email });
    if (!user || !user.comparePassword(password)) {
      res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Email or password is wrong',
      });
      return;
    }
    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    const { name } = user;
    await usersService.updateUser(user._id, { token });
    res.json({
      status: 'success',
      code: 200,
      data: {
        name,
        email,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
