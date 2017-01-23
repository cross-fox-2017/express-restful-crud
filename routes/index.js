var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({raw:true}).then(function(todos){
    res.render('index', { title: 'Todo List', tododata: todos});
  })
});

router.post('/', function(req, res, next) {
  models.User.findOne({where: {email: req.body.email}}).then(function(a){
    models.Todo.create({title: req.body.title, UserId: req.body.userid, is_complete: false, createdAt: new Date(), updatedAt: new Date()}).then(function(todos){
      res.redirect('/');
    })
  })
});

module.exports = router;
