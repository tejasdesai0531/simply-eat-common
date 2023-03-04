const CustomError = require('./custom-error')

export class DatabaseConnectionError extends CustomError {
    constructor() {
        super('Error connecting to database');
    }
    
    getStatusCode() { return 500 }

    serializeErrors() {
        return [{ message: this.message }]
    }
}

module.exports = DatabaseConnectionError
