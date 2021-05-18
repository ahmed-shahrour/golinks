const express = require('express');
const router = express.Router();

const controllers = require('./controllers')

router.get('/')

// Fall back for error handling
router.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

module.exports = router;