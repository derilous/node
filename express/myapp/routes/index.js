var express = require('express');
var router = express.Router();

/* GET home page. */

// calling index from controllers folder instead of writing lengthy code
let landing = require('../controllers/landing');

router.get('/', landing.getLanding);

module.exports = router;
