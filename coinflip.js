btn.addEventListener('click', function() {coinFlip();});
var heads = 0;
var tails = 0;
var coinFlip = function() {
  var face;
  var result = Math.floor(Math.random()*2);
  result === 0 ? (heads++, face = "HEADS!") : (tails++, face = "TAILS!");
  sandbox.textContent = "You got " + face + "\nSo far, you got " + heads + " heads and " + tails + " tails.";
  sandbox.style.color = "green";
}