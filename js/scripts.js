var counter = function(userInput){
var number = [];
  for(var countingNumber = 0; countingNumber<= userInput; countingNumber++){
    debugger;
    number.push(countingNumber);
    if ((countingNumber % 15) === 0){
      number.splice(countingNumber, 1, 'PingPong');
    } if ((countingNumber % 5) === 0){
      number.splice(countingNumber, 1, 'Pong');
    } if ((countingNumber % 3) === 0){
      number.splice(countingNumber, 1, 'Ping');
    }
  }

}


$(document).ready(function () {
  $("#pingPong").submit(function(event){
    $("#pingPongOutput").empty();
      event.preventDefault();
      var userInput = $("#userInput").val();
      var counting = counter(userInput);
      






/*     for (number = 1; number <= userInput; number++) {
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
     */
  });
});
