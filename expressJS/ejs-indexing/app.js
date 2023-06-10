const express = require('express');
const path = require('path');
const app = express();
const Joi = require('joi');
const bodyParser = require('body-parser');

const schem = Joi.object().keys({
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.get('/:userQuery', (req, res) => {
  res.render('index', {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ['book1', 'book2', 'book3'],
      loggedIn: true,
      username: 'test',
    },
  });
});
// .use is used for using middleware
// app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  // Respond by rendering the EJS file
  res.render('index');
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

app.listen(3000);
