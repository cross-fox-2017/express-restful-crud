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
  models.Todo.create(
    {
      title: req.body.title,
      is_complete: req.body.isComplete,
      UserId: req.body.UserId
    }).then(function(data){
      res.redirect('/')
  })
});

router.get('/update/:id', function(req, res, next) {
  models.Todo.findById(req.params.id).then(function (todos) {
    res.render("update", {data: todos})
  })
});

router.post('/doUpdate', function (req, res, next) {
  let id = req.body.data_id
  models.Todo.findById(id).then(function(data){
    if(data){
      data.updateAttributes(
        {
          title: req.body.title,
          is_complete: req.body.isComplete
        }).then(function(){
            res.redirect('/')
        })
      }
  })
});

router.get('/delete/:id', function(req, res){
  let id = req.params.id
  models.Todo.findById(id).then(function(data){
    if(data){
      data.destroy({
        where:{
          data:req.body.id
        }
      })
    }
    res.redirect('/')
  })
});

module.exports = router;
