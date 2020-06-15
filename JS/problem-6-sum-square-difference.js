function sumSquareDifference(n) {
  
  var squareSum = 0;
  var sumSquare = 0;

  for (var i=1; i<= n; i++) {
    squareSum += Math.pow(i,2);
    sumSquare += i;
  }

  sumSquare = Math.pow(sumSquare,2);
  
  return sumSquare - squareSum;
}

console.log(sumSquareDifference(20));
