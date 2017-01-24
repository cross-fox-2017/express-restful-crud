"use strict"

let db = require("./models");
// let faker = require("faker");

function show () {
  // db.Todo.findAll({raw:true}).then(function (find) {
  //   find.forEach(function (data) {
  //     console.log(data);
  //   })
  // })
  db.User.findAll().then(function (find) {
    db.Todo.findAll({include: db.User}).then(function (find) {
      console.log(find[0].User.email);
    })
  })
}

function formatDate() {
  db.Todo.findAll({raw:true}).then(function (find) {
    find.forEach(function (data) {
      let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      let dayNames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      let dayIndex = data.createdAt.getDay()
      let date = data.createdAt.getDate()
      let monthIndex = data.createdAt.getMonth()
      let year = data.createdAt.getFullYear()
      let hour = data.createdAt.getHours()
      let minute = data.createdAt.getMinutes()
      console.log(`${dayNames[dayIndex]}, ${date} ${monthNames[monthIndex]} ${year}, ${hour}:${minute}`);
    })
  })
}

function updated(id, newTitle) {
  db.Todo.findById(id).then(function (find) {
    find.update({
      title: newTitle
    })
  })
}

function deleted(id_input) {
  db.Todo.destroy({
    where: {
      id: id_input
    }
  })
}

show();
// formatDate();
// updated(1,"Makan");
// deleted(1)
