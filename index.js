
/*
 * GET home page.
 

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

*/
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.json({
		message: "Welcome to Notification Engine"
	});
});

router.use('/user', require("./User.js"));
router.use('/jobs', require("./Jobs.js"));

module.exports = router;
