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
router.post('/', function (req, res, next) {
  todo.create({
    title: req.body.title,
    is_complete: req.body.complete,
    UserId: req.body.UserId
  }).then(function(data){
      res.redirect('/')
  })

})

// PUT
router.post('/updated', function (req, res, next) {
  todo.findById(req.body.id).then(function (todos) {
    todos.update({
      title: req.body.title
    }).then(function () {
      res.redirect('/')
    })
  })
})

router.get('/update/:id', function(req, res, next) {
  todo.findById(req.params.id).then(function (todos) {
    res.render("update", {todo: todos})
  })
});

module.exports = router;
