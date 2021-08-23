const getCurrentUser = (req, res, next) => {
  const { name, email, balance } = req.user;
  res.json({
    status: 'success',
    code: 200,
    data: {
      name,
      email,
      balance,
    },
  });
};

module.exports = getCurrentUser;
