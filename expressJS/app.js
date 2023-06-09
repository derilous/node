const express = require('express');
const path = require('path');
const app = express();
// .use is used to set an alias for the static folder - so others don't see it
app.use('/public', express.static(path.join(__dirname, 'static')));

// ask for route and then state callback functions - here it's request and response
// req is basically the data that the client is sending us. res is what we send back to them
app.get('/', (req, res) => {
  // Respond with the html file when user access this route
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// another path /example. Same demo
app.get('/example', (req, res) => {
  res.send('hitting example route');
});

// Route params like : to be used when you NEED the Data.
// Query string params to be used when the data you require is optional
app.get('/example/:name/:age', (req, res) => {
  // Console will display the params I used in the URL as an object
  console.log(req.params);
  //   re.query will return the query I asked for in the URL -> see example - url.and/slug"?tutorial=paramstutorial"
  console.log(req.query);
  //   getting the params I used in the URL to be displayed on the site with req
  res.send(req.params.name + ' + ' + req.params.age);
});

// create the port for the user to access said route
app.listen(3000);
