document.querySelector('#btn').addEventListener('click', function() {factorial();});
var factorial = function() {
  var num = prompt("Please choose your number:");
  if (num < 0 || isNaN(num) || num === null || num === "") {
    alert("Wrong input, please try again.");
  } else if (Number(num) === 0) {
    document.querySelector('#sandbox').textContent = "The factorial of 0 is 1.";
  } else {
    num = Number(num);
    var num1 = num;
    var fact = num;
    while (num > 1) {
      num--
      fact *= num;
    }
    document.querySelector('#sandbox').textContent = "The factorial of " + num1 + " is " + fact + ".";
  }
}