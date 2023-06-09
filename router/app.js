const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

const people = require('./routes/people');
app.use('/people', people);

app.listen(3000);
