/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,'')
  return cleaned === cleaned.split('').reverse().join('');

}

console.log(isPalindrome("Nan"))
console.log(isPalindrome("Hello"))
console.log(isPalindrome("A man , a plan a cancel, Panama"))

module.exports = isPalindrome;



// assignment done
