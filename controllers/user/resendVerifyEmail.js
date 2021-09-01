const { usersService } = require('../../services');
const sendMail = require('../../utils/sendGrid');
const resendVerifyEmail = async (req, res, next) => {
  const { email } = req.user;
  if (!email) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing required field email',
    });
    return;
  }
  try {
    const user = await usersService.findUser({ email });
    if (!user) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
      return;
    }
    if (user.verify) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed',
      });
      return;
    }
    
    const mail = {
      to: email,
      subject: 'Please Verify Your Wallet',
      text: "Let's verify your email so you can start to use your Wallet",
      html: `<a href="https://finance-app-wallet.herokuapp.com/${user.verifyToken}">Let's verify your email so you can start to use your Wallet</a>`,
    };
    sendMail(mail);
    res.json({
      status: 'success',
      code: 200,
      message: 'Verification email sent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerifyEmail;
