function largestPalindromeProduct(n) {
  var number = '9'.repeat(n);
  var number2 = '9'.repeat(n);
  var result;
  var lastPalindrome = 0;

  for (var i = parseInt(number);i >=1;i--) {
    for(var  i2 = parseInt(number2); i2 >=2; i2--) {
        result = i * i2;
        if (isPalindrome(result)) {
          if (result > lastPalindrome) {
            lastPalindrome = result;
          }
        }
    }
  }

return lastPalindrome;
  
}

function isPalindrome(number) {
  var palindromeArray = String(number).split("")

  if ((palindromeArray.length % 2) == 0) {
    for (var i=0; i < palindromeArray.length/2; i++) {

      if (palindromeArray[i] != palindromeArray[palindromeArray.length-1-i]) {
        return false
      }
    }
    return true

  }
  else {
    return false
  }

}

console.log(largestPalindromeProduct(3));
