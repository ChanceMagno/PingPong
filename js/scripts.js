var numbers = [];

var countingNumber;
var count = function(userInput){
  for(var countingNumber = 1; countingNumber <= userInput; countingNumber++){
    numbers.push(countingNumber)
    if (countingNumber % 15 === 0){
      numbers.splice(countingNumber-1, 1, 'PingPong');
    } else if (countingNumber % 5 === 0) {
      numbers.splice(countingNumber-1, 1, 'Pong');
    } else if (countingNumber % 3 === 0){
      numbers.splice(countingNumber-1, 1, 'Ping');
    }
  }
  return numbers;
}

$(document).ready(function () {
  $("#pingPong").submit(function(event){
    $("#pingPongOutput").empty();
    numbers.splice(0,numbers.length);
    event.preventDefault();
    var userInput = $("#userInput").val();
    var counting = count(userInput);
    numbers.forEach(function(number){
      $("#pingPongOutput").append("<li>"+ number +"</li>");
    })


  });
});
