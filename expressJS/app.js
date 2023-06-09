const express = require('express');

const app = express();

// ask for route and then state callback functions - here it's request and response
app.get('/', (req, res) => {
  // Respond hello world when user access the route
  res.send('Hello World');
});

// another path /example. Same demo
app.get('/example', (req, res) => {
  res.send('hitting example route');
});

// Setting route params with :
app.get('/example/:name/:age', (req, res) => {
  // Console will ask for the params I mentioned in the URL
  console.log(req.params);
  res.send('example with route params');
});

// create the port for the user to access said route
app.listen(3000);
