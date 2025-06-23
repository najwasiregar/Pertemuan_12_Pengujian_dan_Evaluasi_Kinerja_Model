// utils/responseBuilder.js

/**
 * Build a standard API response.
 * @param {boolean} success - Indicates if the operation was successful.
 * @param {string} message - A message describing the response.
 * @param {Object} [data] - Optional data to include in the response.
 * @returns {Object} The response object.
 */
const buildResponse = (success, message, data = null) => {
    return {
      success,
      message,
      ...(data && { data }),
    };
  };
  
  module.exports = buildResponse;
  