// middlewares/errorHandler.js
const logger = require('../config/logger');

/**
 * Global error-handling middleware.
 */
const errorHandler = (err, req, res, next) => {
  logger.error(`Error: ${err.message} - ${req.method} ${req.originalUrl}`);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
