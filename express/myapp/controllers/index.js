exports.index = function (req, res, next) {
  res.render('index', { title: 'Express' });
};

// exporting this file to be picked up on index.js in the routes folder
