/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let num = numbers[0]
    for(let i=0; i<numbers.length; i++) {
        if(num < numbers[i]) {
            num = numbers[i]
        }
    } ;    
    return num
}

// const bigNumber = findLargestElement([-3.4,-7,2.5454,-9.5,1])
// console.log(bigNumber)

module.exports = findLargestElement;

function findLargestElement(numbers){
    let num  = numbers[0]
    for (let i=0;i<lengthnumbers;i++){
        if( num < numbers[i]){
            num = numbers[i]
        }

    }
    return num
}