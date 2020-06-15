function largestPrimeFactor(number) {
  var result;
 
  result = number;

  var i = number;
  var divisor = 2;
  while (i > 1) {
    if ((i % divisor) == 0) {
       if (isPrime(divisor)) {
         result = divisor;
       }
       i = i / divisor;
    }
       divisor++
    }


  return result;
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
