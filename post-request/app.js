const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { request } = require('http');

// .use is used for using middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  // Respond with the html file when user access this route
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  // database work here
  res.send('successfully posted data');
});
