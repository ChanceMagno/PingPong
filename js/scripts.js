$(document).ready(function () {
  $("#pingPong").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();


     for (number = 1; number <= userInput; number++) {
       if ((number % 15) === 0) {
          alert("PingPong");
       } else if ((number % 5) === 0) {
          alert("Pong");
       }  else {
          alert(number);
       }
     }
  });
});
