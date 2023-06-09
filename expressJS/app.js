const express = require('express');

const app = express();

// ask for route and then state callback functions - here it's request and response
app.get('/', (req, res) => {
  // Respond hello world when user access the route
  res.send('Hello World');
});

// create the port for the user to access said route
app.listen(3000);
