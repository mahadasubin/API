var model = require('../models/UsersModel');


var uM = new model();

function UserController(){
	
}

UserController.prototype.findAll=function(req,res,next){
	uM.findAll(function(data){
		res.json(data);
	});
}

UserController.prototype.findbyName=function(req,res,next){
	var name = req.params.name;
	uM.findbyName(name,function(err,data){
		if(!err){
			res.json(data);
		}
	});
}
UserController.prototype.create=function(req,res,next){
	uM.create(req.body,function(err,data){
		//res.json(data);
	});
}
UserController.prototype.update=function(req,res,next){
	uM.update(req.body,function(err,data){
		//res.json(data);
	});
};

UserController.prototype.del=function(req,res,next){
	var name = req.params.name;
	winston.info('Deleting User Info');
	uM.del(name,function(err,data){
		if(!err){
			res.json(data);
		}
	});
};

UserController.prototype.search=function(req,res,next){
	//uM.findAll(function(data){
	//	res.json(data);
	//});
};

module.exports = UserController;