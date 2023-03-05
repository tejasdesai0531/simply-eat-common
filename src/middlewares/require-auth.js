const NotAuthorizedError = require('@simply-eat/common')

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};

module.exports = requireAuth
