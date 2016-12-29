btn.addEventListener('click', function() {euler3();});
var euler3 = function() {
	var num = num2 = 600851475143;
	var factors = [];
	for (var i = 2; num > 1; i++) {
    	if (num % i === 0) {
			factors.push(i);
    		num /= i;
    	}
  	}
  	var result = factors[factors.length-1];
	sandbox.style.color = "green";
	sandbox.textContent = "> The largest prime factor of the number " + num2 + " is " + result + ".";
}