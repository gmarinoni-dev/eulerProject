function smallestMult(n) {
  
  var divisible = false;
  var result = n;

  while (!(divisible)) {
    result ++
    divisible = true;
    for (var i = n; i>1; i--) {
      if (!((result % i) == 0)) {
        divisible = false;
        break;
      }
    }

  }
  return result;
}

console.log(smallestMult(7));
