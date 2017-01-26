
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
//
var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
var uc = new UserController();
//var model= require('../models/UserModel');
//var um=new model();

router.get("/", uc.findAll.bind(uc));
router.get("/:name", uc.findbyName.bind(uc));
router.post("/", uc.create.bind(uc));
router.put("/", uc.update.bind(uc));
router.del("/:name", uc.del.bind(uc));
router.search("/", uc.search.bind(uc));



module.exports=router;