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
router.get('/edit/:id', function(req, res) {
  let id = req.params.id
  todo.findById(id).then(function (tes) {
      res.render('edit', {title: "edit memo", update:tes} )
  })
});

router.post('/updated',function(req,res){
  let id = req.body.id
  todo.findById(id).then(function (data){
    if(data){
      data.update({title:req.body.title,complete:req.body.complete}).then(function () {
        // body...
        res.redirect('/')
      })
    }
  })
})

//DELETE
router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id;
  todo.destroy({
    where: {
      id: id
    }
  }).then(function(){
    res.redirect('/')
  })
});
module.exports = router;
