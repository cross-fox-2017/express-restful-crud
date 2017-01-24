var db = require("./models")

db.User.create({email:"irsan@gmail.com"}).then(function(){
  console.log('data add');
})
