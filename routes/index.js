var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({include: models.User}).then(function(todos){
    models.User.findAll({raw:true}).then(function(data){
      res.render('index',{title:"Todo List", todoData:todos, users:data});
    })
  })
});

router.post('/add', function (req, res, next) {
  models.Todo.create({
    title: req.body.title,
    is_complete: req.body.isComplete,
    UserId: req.body.UserId
  }).then(function(data){
    res.redirect('/')
  })
});

router.get('/getUpdate/:id', function(req, res, next) {
  models.Todo.findById(req.params.id).then(function (todos) {
    res.render("update", {todo: todos})
  })
});

module.exports = router;
