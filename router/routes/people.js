const express = require('express');
const route = express.Router();

// Using middleware
route.use((req, res, next) => {
  console.log('middle ware being used');
  next();
});

// Creating routes
route.get('/', (req, res) => {
  res.send('/being hit');
});

route.get('/example', (req, res) => {
  res.send('/example being hit');
});

module.exports = route;
