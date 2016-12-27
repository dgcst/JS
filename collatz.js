btn.addEventListener('click', function() {collatz();});
var collatz = function() {
  var steps = 0;
  var num = prompt("Please choose your number (higher than 1):");
  var initNum = num;
  if (num <= 1 || isNaN(num) || num === null || num === "") {
    alert("Wrong input, please try again.");
  } else {
      num = Number(num);
      while (num != 1) {
        steps++;
        num % 2 == 0 ? num /= 2 : num = num * 3 + 1;
      }
      sandbox.textContent = "> The number " + initNum + " originated " + steps + " steps until reaching 1.";
    }
}