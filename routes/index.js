var express = require('express');
var router = express.Router();
var model = require('../models');
var user = model.User;
var todo = model.Todo;

/* GET home page. */
router.get('/', function(req, res, next) {
  todo.findById(3).then(function(result){
    result.getUser().then(function(val){
      console.log(val);
    });
  })
  res.render('index', { title: 'Express Todos' });
});

router.post('/add', function(req, res, next) {
  if(req.body.add == ""){
    res.redirect('/list')
  }
  let title = req.body.title
  let userId = req.body.UserId
  let complete = req.body.complete
  if (!complete){
    complete= false
  }
  todo.create({title: title, UserId: userId, isComplete: complete}).then(function(val){
    res.redirect('/list')
  })
});
router.get('/list', function(req, res, next){
  todo.findAll({order: [['id', 'ASC']], include: [user]}).then(function(result){
    user.findAll({raw: true}).then(function(dataUser){
      res.render('list', {result: result, title: "TODO", data: dataUser})
    })
  })

});
router.post('/update', function(req,res,next){
  let action = req.body.action.split(" ")
  if(action[0] == 'update'){
    todo.findById(action[1]).then(function(data){
      res.render('update', { data: data, title: "TODOs"})
    })
  } else {
    todo.destroy({where: {id: action[1]}}).then(function(data) {
      res.redirect('/list')
    })
  }
})

router.post('/updated', function(req, res, next) {
  todo.findById(req.body.id).then(function(val) {
    val.update({
      title: req.body.title
    }).then(function(val) {
      res.redirect('/list')
    })
  })
})
module.exports = router;
