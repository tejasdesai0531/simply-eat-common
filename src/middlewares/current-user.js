const jwt = require('jsonwebtoken')

const currentUser = (req, res, next) => {
  if (!req.headers.token) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.headers.token,
      process.env.JWT_KEY
    );
    req.currentUser = payload;
  } catch (err) {}

  next();
};

module.exports = currentUser