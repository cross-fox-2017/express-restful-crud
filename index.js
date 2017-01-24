var db = require("./models")

db.User.create({email:"timogio@gmail.com"}).then(function(){
  console.log('data add');
})
