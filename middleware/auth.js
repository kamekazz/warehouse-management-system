const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.json({
      success: false,
      message: 'No token, authorization denied'
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.json({ success: false, message: 'Token is not valid' });
  }
};
