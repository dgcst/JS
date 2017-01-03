btn.addEventListener('click', function() {euler7();});
var euler7 = function() {
  var num = 10001;
  var primes = [2]; //Added by hand
  for (var i = 3; i; i += 2) {
    var c = 0;
    for (var k = 3; k <= i; k += 2) {
      if (i%k === 0) {
        c++;
      }
      if (c > 1) {
        break;
      }
    }
    if (c === 1) {
      primes.push(i);
    }
    if (primes.length === num) {
      sandbox.style.color = "green";
      sandbox.textContent = "> The 10001st prime number is " + primes[num-1] + "."; 
    }
  }
  
}