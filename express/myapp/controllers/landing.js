const app = require('../app');
// const bodyParser = require('body-parser');

exports.getLanding = function (req, res) {
  res.render('landing', { title: 'Express' });
};
// exporting this file to be picked up on index.js in the routes folder

exports.submitLead = function (req, res) {
  console.log(req.body.leadEmail);
  res.send('email is ' + req.body.leadEmail);
};
