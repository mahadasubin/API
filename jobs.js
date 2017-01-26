var express = require('express'),
router = express.Router();
var JobsModel = require('../models/JobsModel');
var jM = new JobsModel();

router.get("/",function(req,res){
	res.json({
		message:"Welcome to Jobs Page"
	});
});
router.get("/:jobName",function(req,res){
	var jobName = req.params.jobName;
	jM.findbyName(jobName,function(data){
		res.json(data);
	})
});

router.post("/",function(req,res,next){
	
	
});

router.put("/",function(req,res,next){
	
	
});

router.del("/",function(req,res,next){
	
	
});
router.search("/",function(req,res,next){
	
	
});
module.exports=router;
