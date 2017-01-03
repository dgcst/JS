btn.addEventListener('click', function() {euler6();});
var euler6 = function () {
	var numbers = [];
	var i = 1;
	var sumOfInts = 0;
	while (i <= 100) {
	    numbers.push(i);
	    sumOfInts += i;
	    i++;
	}
	var sumOfSquares = 0;
	for (var k = 0; k < numbers.length; k++) {
		sumOfSquares += (numbers[k]*numbers[k]);
	}
	sumOfInts *= sumOfInts;
	var result = (sumOfInts - sumOfSquares);
	sandbox.style.color = "green";
	sandbox.textContent = "> The difference is " + result + ".";
}