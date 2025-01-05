/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by runnin
*/
// HELLO world
// let helo = ["hello", "world"]


function countVowels(str) {
  let num = 0
  const vowels = 'aeiouAEIOU'
    // strs = str.split(" ")
      // Your code here
      for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
          num++
        }
        
      }

      return num
}

// console.log(countVowels("Hello WOrld"))

module.exports = countVowels;


// assignment done