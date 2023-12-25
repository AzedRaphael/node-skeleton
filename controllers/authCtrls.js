const login = async (req, res) => {
  res.status(200).send({ message: 'Login Successful' });
};

const register = async (req, res) => {
  res.status(200).send({ message: 'Register Successful' });
};

module.exports = { login, register };
