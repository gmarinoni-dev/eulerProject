function fiboEvenSum(n) {
  var previousResult = 0;
  var currentResult = 1;
  var result = 0;
  
  while (currentResult < n) {
    var temp = currentResult
    currentResult = currentResult + previousResult;
    previousResult = temp;

    if ((currentResult % 2) == 0) {
      result += currentResult;
    }

  }
  return result;
}

console.log(fiboEvenSum(1000));
