var express = require('express');
var router = express.Router();

/* GET home page. */

// calling index from controllers folder instead of writing lengthy code
let index = require('../controllers/index');

router.get('/', index.index);

module.exports = router;
