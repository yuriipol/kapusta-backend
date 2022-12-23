const getCurrent = async (req, res) => {
  const { email, avatarURL, balance, transactions } = req.user;

  res.json({
    email,
    avatarURL,
    balance,
    transactions,
  });
};

module.exports = getCurrent;
