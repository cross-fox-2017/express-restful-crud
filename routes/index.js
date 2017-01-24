var express = require('express');
var router = express.Router();
var model = require('../models')
var user = model.User
var todo = model.Todo

/* GET home page. */
router.get('/', function (request, response) {
  todo.findAll({include: user}).then(function (todo) {
    user.findAll({raw:true}).then(function (data) {
      response.render('index', {title: "list", users: data, todosdata:todo} )
    })
  })
})

//POST
router.post('/',function(req,res){
  user.create({title:req.body.title,created:req.body.created,phone:req.body.phone}).then(function(tes){
    res.redirect('/')
  })
});

module.exports = router;
