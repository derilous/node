const express = require('express');
const path = require('path');
const app = express();
const Joi = require('joi');
const bodyParser = require('body-parser');
const { request } = require('http');

const schem = Joi.object().keys({
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

// .use is used for using middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  // Respond with the html file when user access this route
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
  const { error, value } = schem.validate(req.body);

  if (error) {
    res.send('An error has occurred: ' + error.details[0].message);
  } else {
    console.log(value);
    res.send('Successfully posted data');
  }
});
//   res.send(validate);

app.listen(3000);
