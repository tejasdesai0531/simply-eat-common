const CustomError = require('./custom-error')

class NotAuthorizedError extends CustomError {
    constructor() {
        super('Not Authorized');
    }
    
    getStatusCode() { return 401 }

    serializeErrors() {
        return [{ message: this.message }]
    }
}

module.exports = NotAuthorizedError
