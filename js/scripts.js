$(document).ready(function () {
  $("#pingPong").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();


     for (number = 1; number <= userInput; number++) {
       if ((number % 15) === 0) {
          $("#pingPongOutput").append("<li>"+"PingPong"+"</li>");
       } else if ((number % 5) === 0) {
          $("#pingPongOutput").append("<li>"+"Pong"+"</li>");;
       } else if ((number % 3) === 0) {
          $("#pingPongOutput").append("<li>"+"Ping"+"</li>");
       } else {
          alert(number);
       }
     }
  });
});
