btn.addEventListener('click', function() {euler2();});
var euler2 = function() {
	var fib = [0,1];
	var k = 2;
	var sum = 0;
	while (fib[k-1] <= 4000000) {
		fib[k] = fib[k-1] + fib[k-2];
		if (fib[k] % 2 === 0) {
			sum += fib[k];
		}
		k++;
	}
	sandbox.style.color = "green";
	sandbox.textContent = "> The sum of the even-valued terms is " + sum + ".";
}