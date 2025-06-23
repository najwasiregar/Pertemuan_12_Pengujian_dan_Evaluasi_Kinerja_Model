// middlewares/validateRequest.js
const { validationResult, checkSchema } = require('express-validator');

/**
 * Middleware to validate incoming requests.
 * @param {Object} schema - Validation schema.
 * @returns {Function[]} Array of middleware functions.
 */
const validateRequest = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    next(); // Lanjutkan ke controller jika validasi berhasil
  },
];

module.exports = { validateRequest };
