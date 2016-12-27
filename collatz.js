document.querySelector('#btn').addEventListener('click', function() {collatz();});
var collatz = function() {
  var steps = 0;
  var num = prompt("Please choose your number (higher than 1):");
  var num1 = num;
  if (num != null) {
    while (num != 1) {
      steps++;
      if (num % 2 == 0) {
        num /= 2;
      } else {
        num = num * 3 + 1;
      }
    }
    document.querySelector('#sandbox').textContent = "The number " + num1 + " originated " + steps + " steps until reaching 1.";
  } else {
    alert("No number inserted, please try again.");
  }
}