function nthPrime(n) {
var number = 1;
var primes = 0;

while (primes < n) {
  number++;
  if (isPrime(number)) {
    primes++;
  }

}
return number;

}

function isPrime (number) {
  var result = true;

  if ((number == 1) || (number == 2)) {
    result = true;
  }
  else
  {

    for (var i = 2; i < number; i++) {
      if ((number % i) == 0) {  
        result = false;
        break;
      }
     }  
    }
    return result;
}

console.log(nthPrime(1000));
