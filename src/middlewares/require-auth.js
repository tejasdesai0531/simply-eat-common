const NotAuthorizedError = require('@simply-eat/common')

export const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
