const jwt = require('jsonwebtoken');
const { UnauthorizedError, BadRequestError } = require('../errors');

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Invalid Authentication');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decodedData.userId, name: decodedData.name };
    next();
  } catch (error) {
    throw new BadRequestError('Not authorized to access this route');
  }
};

module.exports = AuthMiddleware;
