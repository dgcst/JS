btn.addEventListener('click', function() {euler5();});
var euler5 = function() {
	for (var i = 20; i > 0; i++) {
		for (var k = 20; k > 0; k--) {
			if (i%k !== 0) {
				break;
			} else if (k === 1) {
				sandbox.style.color = "green";
  				sandbox.textContent = "> Number " + i;
			}
		}
	}
}