var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/update/:id', function(req, res, next) {
  console.log('sdasdsa');
  db.Todo.findById(req.params.id).then(function(result){
    res.render('pages/update',{list: result})
  })
})


module.exports = router;
