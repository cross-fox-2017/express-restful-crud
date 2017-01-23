module.exports = {
  formatDate : function(value) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let dayNames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let dayIndex = value.getDay()
    let date = value.getDate()
    let monthIndex = value.getMonth()
    let year = value.getFullYear()
    let hour = value.getHours()
    let minute = value.getMinutes()
    return `${dayNames[dayIndex]}, ${date} ${monthNames[monthIndex]} ${year}, ${hour}:${minute}`;
  }
}
