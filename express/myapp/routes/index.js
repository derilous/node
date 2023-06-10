var express = require('express');
var router = express.Router();
/* GET home page. */

// calling index from controllers folder instead of writing lengthy code
let landing = require('../controllers/landing');
const app = require('../app');

router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
module.exports = router;
