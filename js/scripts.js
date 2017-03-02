var counter = function(userInput){
var numbers = [];
  for(var countingNumber = 1; countingNumber< userInput; countingNumber++){
    numbers.push(countingNumber);
    console.log(countingNumber);
    console.log(numbers);
  }
}

$(document).ready(function () {
  $("#pingPong").submit(function(event){
    //$("#pingPongOutput").empty();
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
