const jwt = require('jsonwebtoken');

 function auth(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    let = token = bearerToken;
    if (!token) {
      return res.json({
        success: false,
        error: 'No token, authorization denied'
        });
    }


    // Next middleware
   // Verify token
   try {
    const decoded = jwt.verify(token, 'kk');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.json({
      success: false,
      error: 'Token is not valid'
    });
  }
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}




module.exports = auth;
