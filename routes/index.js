var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({raw:true}).then(function(todos){
    console.log(todos);
    res.render('index',{title:"Todo List", todoData:todos});
  })
});
module.exports = router;
