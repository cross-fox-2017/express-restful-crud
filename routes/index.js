var express = require('express');
var router = express.Router();
var db = require("../models")
/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll().then(function(tod){
    db.Todo.findAll({include:db.User}).then(function(resus){
        res.render('pages/memo', { title:'Todo List',tododata:resus});
    })
  })
});

router.post('/', function(req, res, next) {
  db.User.findOne({where:{email:req.body.email}}).then(function(tes){
    db.Todo.create({title: req.body.title,is_complete:false,completedAt:new Date(),UserId:tes.id}).then(function(tod){
      res.redirect('/')
    })
  })

});
router.get('/update/:id', function(req, res, next) {
  db.Todo.findById(req.params.id).then(function(result){
    res.render('pages/update',{list: result})
  })
});

router.post('/updates', function(req, res, next) {
  db.Todo.findById(req.body.id).then(function(result){
    result.update({title:req.body.title,is_complete:req.body.complete,updatedAt:new Date()})
    res.redirect('/')
  })
});

router.get('/delete/:id', function(req, res, next) {
  db.Todo.findById(req.params.id).then(function(result){
    result.destroy()
    res.redirect('/')
  })
});


module.exports = router;
