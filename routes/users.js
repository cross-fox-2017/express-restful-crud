var express = require('express');
var router = express.Router();
var model = require("../models")

/* GET users listing. */
router.get('/', function(req, res, next) {

  model.Todo.findAll({where :{deleted_task:false}, include: model.User}).then(function(data){

      model.User.findAll({raw:true}).then(function(users){
              res.render('viewall',{ results : data, users: users });
      })
  })
});

router.get('/Viewedit/:id', function(req, res, next) {

  let id = req.params.id
  model.Todo.findById(id).then(function(data){
        res.render('viewedit',{data: data})
  })
});

router.get('/viewAdd/:id',function(req,res,next){

  let id = req.params.id

  model.User.findById(id).then(function(data){

          res.render('viewadd',{data:data})
  })

})

router.get('/viewDeletedTask',function(req,res,next){



  model.Todo.findAll({

    where:{deleted_task:true}

  }).then(function(data){

    if(data)
    res.render('viewdeletedtask',{data:data})
  })

})

router.get('/viewNewUser',function(req,res,next){

          res.render('viewnewuser')
})


router.post('/doAdd',function(req,res,next){

  let user_id = req.body.user_id
  let task = req.body.task

  model.Todo.create({

    task : task,
    UserId : user_id,
    is_completed : false,
    deleted_task : false
  }).then(function(data){

        if(data)
        res.redirect('/users/')
        })

  })

router.post('/doAddUser',function(req,res,next){

    let name = req.body.name
    let email = req.body.email

    model.User.create({

      first_name : name,
      email : email,
      createdAt : new Date(),
      updatedAt : new Date()
    }).then(function(data){

          if(data)
          res.redirect('/users/')
          })

    })

router.post('/doEdit',function(req,res,next){

  let todo_id = req.body.todo_id
  let task = req.body.task

  model.Todo.findById(todo_id).then(function(data){

        if(data)
        data.updateAttributes({
              task : task
        })
        res.redirect('/users/')
  })

})

router.get('/delete/:id',function(req,res,next){

  let todo_id = req.params.id

  model.Todo.findById(todo_id).then(function(data){

        if(data)
        data.updateAttributes({
          deleted_task :true
        })
        res.redirect('/users/')
  })

})

router.get('/finish/:id', function(req, res, next) {

  let id = req.params.id
  model.Todo.findById(id).then(function(data){
    if(data)
    data.updateAttributes({
          is_completed : true
    })
    res.redirect('/users/')
  })
});






module.exports = router;
