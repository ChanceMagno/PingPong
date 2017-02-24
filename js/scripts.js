$(document).ready(function () {
  $("#pingPong").submit(function(event){
    event.preventDefault();
    var userInput = $(parseInt("#userInput")).val();
    if ( userInput = 0) {
      alert("not a number")
    } else {alert("didnt work")}
  });
});
