var express = require('express');
var router = express.Router();
const models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({raw: true}).then(function (todo) {
    res.render('index', {title: 'Todo List', todosdata: todo})
  })
});

router.post('/add', function (req, res, next) {
  models.Todo.create({
    title: req.body.title,
    is_complete: req.body.isComplete,
    UserId: req.body.UserId
  })
  res.redirect('/')
})

router.post('/update', function (req, res, next) {
  models.Todo.findById(req.body.id).then(function (todos) {
    todos.update({
      title: req.body.title
    }).then(function () {
      res.redirect('/')
    })
  })
})

module.exports = router;
