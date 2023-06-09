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
  // Console will display the params I used in the URL as an object
  console.log(req.params);
  //   getting the params I used in the URL to be displayed on the site with req
  res.send(req.params.name + ' + ' + req.params.age);
});

// create the port for the user to access said route
app.listen(3000);
