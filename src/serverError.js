class ServerError extends Error {
  constructor(statusCode, message) {
    const error = super(message);
    error.statusCode = statusCode;
    return error;
  }
}