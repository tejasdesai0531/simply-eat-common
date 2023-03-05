const Listner = require('./events/base-listener')
const Publisher = require('./events/base-publisher')

const CustomError = require('./errors/custom-error')
const BadRequestError = require('./errors/bad-request-error')
const RequestValidationError = require('./errors/request-validation-error')
const NotFoundError = require('./errors/not-found-error')
const DatabaseConnectionError = require('./errors/database-connection-error')
const NotAuthorizedError = require('./errors/not-authorized-error')

const errorHandler = require('./middlewares/error-handler')
const validateRequest = require('./middlewares/validate-request')
const currentUser = require('./middlewares/current-user')
const requireAuth = require('./middlewares/require-auth')

module.exports = {
    Listner,
    Publisher,
    
    CustomError,
    BadRequestError,
    RequestValidationError,
    NotFoundError,
    DatabaseConnectionError,
    NotAuthorizedError,

    errorHandler,
    validateRequest,
    currentUser,
    requireAuth
}