exports.getLanding = function (req, res, next) {
  res.render('landing', { title: 'Express' });
};

// exporting this file to be picked up on index.js in the routes folder
