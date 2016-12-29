btn.addEventListener('click', function() {euler1();});
var euler1 = function() {
	var n = 999;
	var sum = 0;
	while (n >= 3) {
		if (n % 3 == 0 || n % 5 == 0) {
			sum += n;
		}
		n--;
	}
	sandbox.style.color = "green";
	sandbox.textContent = "> The sum of all the multiples of 3 or 5 below 1000 is " + sum;
}