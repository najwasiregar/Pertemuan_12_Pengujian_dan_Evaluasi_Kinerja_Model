// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate requests using JWT.
 */
const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded token data to request object
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token.' });
  }
};

module.exports = { authenticate };
