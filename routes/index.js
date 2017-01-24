var express = require('express');
var router = express.Router();
let models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({include: models.User}).then(function (find) {
    models.User.findAll({raw:true}).then(function (data) {
      res.render('index', {title: 'CRUD Memo', memo: find, users: data});
    })
  })
});

router.post('/update', function(req, res, next) {
  models.Todo.findById(req.body.id).then(function (find) {
    find.update({
      title: req.body.title
    }).then(function(){
      res.redirect('/')
    })
  })
});

router.get('/edit/:id', function(req, res, next) {
  models.Todo.findById(req.params.id).then(function (find) {
    res.render("edit", {todo: find})
  })
});

router.get('/delete/:id', function(req, res, next) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
});

router.post('/add', function(req, res, next) {
  models.Todo.create({title: req.body.title, is_complete: req.body.complete, UserId: req.body.UserId, createdAt: new Date()}).then(function (data) {
    res.redirect('/')
  })
});

module.exports = router;

// Cara render:
// .then(function() {
  // models.Todo.findAll({raw:true}).then(function (find) {
    // res.render('index', { title: 'CRUD Memo', memo:find});
  // })
// })
