var express = require('express');
var router = express.Router();
const models = require("../models")
var dateFormat = require('dateformat');
// var now = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});



router.get('/users', function(req, res, next) {
    models.User.findAll().then(function(data) {
      models.Todo.findAll({ include: [ models.User ] }).then(function(dt){
        res.render('users', {
            getuser: data,
            gettodo: dt
        })
      })
    });
});


router.post('/users/:getid', function(req, res, next) {
    models.Todo.create({
        title: req.body.title,
        is_complete: req.body.is_complete,
        UserId: req.params.getid,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(function() {
        res.redirect('/users');
    })
});

router.get('/delete/:getid', function(req, res, next) {
    models.Todo.findById(req.params.getid).then(function(data){
        data.destroy()
    }).then(function() {
        res.redirect('/users');
    })
});

router.get('/update/:getid', function(req, res, next) {
    models.Todo.findById(req.params.getid).then(function(data){
        res.render('update',{
            sendid : data.id,
            sendTitle : data.title,
            sendis_complete : data.is_complete,
            sendUserId : data.UserId
        });
    })
});

router.post('/update', function(req, res, next) {
  models.Todo.findById(req.body.id).then(function(data) {
    data.update({
        title: req.body.title,
        is_complete: req.body.is_complete,
        UserId: req.params.userid,
        updatedAt: new Date()
    }).then(function() {
        res.redirect('/users');
    })
  })
});


module.exports = router;
