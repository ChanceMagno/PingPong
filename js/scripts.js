$(document).ready(function () {
  $("#pingPong").submit(function(event){
    $("#pingPongOutput").empty();
    var userInput = $("#userInput").val();
    event.preventDefault();

     for (number = 1; number <= userInput; number++) {
       if ((number % 15) === 0) {
          $("#pingPongOutput").append("<li>"+"Ping Pong"+"</li>");
       } else if ((number % 5) === 0) {
          $("#pingPongOutput").append("<li>"+"Pong"+"</li>");
       } else if ((number % 3) === 0) {
          $("#pingPongOutput").append("<li>"+"Ping"+"</li>");
       } else {
          $("#pingPongOutput").append("<li>"+number+"</li>");
          $("#pingPong").trigger("reset");
       }
     }
  });
});
