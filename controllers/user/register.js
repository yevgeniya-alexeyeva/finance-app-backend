const { usersService } = require('../../services');
const { v4 } = require('uuid');
const sendMail = require('../../utils/sendGrid');
const register = async (req, res, next) => {
  const newUser = req.body;
  const { email, name } = newUser;
  const findUser = await usersService.findUser({ email });
  if (findUser) {
    res.status(409).json({
      status: 'conflict',
      code: 409,
      message: 'Email in use',
    });
    return;
  }
  const verifyToken = v4();
  try {
    await usersService.register({
      ...newUser,
      verifyToken,
    });

    const mail = {
      to: email,
      subject: 'Verification',
      text: `http://localhost:3000/users/verify/${verifyToken}`,
    };
    sendMail(mail);
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'User created',
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
