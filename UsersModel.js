var mongoose = require('mongoose');

function UsersModel(){
	
}
var userSchema = mongoose.Schema({
	firstname : {type:String},
	lastname: {type:String},
	email: {type:String},
	phone: {type:String},
	active:{type:Boolean},
	sub_list:{type:Array}
});

var UserObjModel = mongoose.model('first',userSchema);

UsersModel.prototype.findAll = function(callback){
	UserObjModel.find({},function(err,data){
		callback(data);
	});
};
UsersModel.prototype.findbyName = function(name,callback){
	if(name){
		UserObjModel.find({firstname:name},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
		});
	}
};

UsersModel.prototype.create = function(payload,callback){
	var model = UserObjModel(payload);
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
		if(!err){
			model.update();
		}else{
			model.save();
			callback(null,model);
		}
	});
};

UsersModel.prototype.update = function(payload, callback){
	var model = UserObjModel(payload);
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
		if(!err){
		model.create();
		}else{
			model.update();
			callback(null,model);
		}
	});
};

UsersModel.prototype.del = function(name,callback){
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
		if(!err){
			model.remove({firstname:name},function(err,data){
			callback(data);
		});
		}
	});
};

UsersModel.prototype.search = function(query,callback){
	UserObjModel.remove({firstname:name},function(err,data){
		callback(data);
	});
};



module.exports =UsersModel;