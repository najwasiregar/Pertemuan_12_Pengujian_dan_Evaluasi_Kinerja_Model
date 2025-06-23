// utils/tokenHelper.js
const jwt = require('jsonwebtoken');

/**
 * Generate a JWT token.
 * @param {Object} payload - The data to encode in the token.
 * @param {string} secret - The secret key.
 * @param {Object} options - Optional settings for the token.
 * @returns {string} The generated token.
 */
const generateToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};

/**
 * Verify a JWT token.
 * @param {string} token - The token to verify.
 * @param {string} secret - The secret key.
 * @returns {Object} The decoded token data.
 * @throws Will throw an error if the token is invalid or expired.
 */
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
