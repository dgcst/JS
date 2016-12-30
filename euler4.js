btn.addEventListener('click', function() {euler4();});
var euler4 = function () {
  var largest = 0;
  for (var i = 999; i >= 100; i--) {
    for (var k = 999; k >= 100; k--) {
      var product = i * k;
      var product2 = (product.toString()).split('').reverse().join('');
      product2 = parseInt(product2);
      if (product === product2 && product > largest) {
        largest = product;
      }
    }
  }
  sandbox.style.color = "green";
  sandbox.textContent = "> The largest palindrome made from the product of two 3-digit numbers is " + largest + ".";
}