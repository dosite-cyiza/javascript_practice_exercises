/*
//  According to Wikipedia a happy number is defined by the following process :
//  "Starting with any positive integer, replace the number by the sum of the squares
//   of its digits, and repeat the process until the number equals 1 (where it will stay), or it
//    loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in
//     1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
//  Write a JavaScript program to find and print the first 5 happy numbers.
//  */

let n = 49;

function happyNumber(n){
    let numToString = string(n)
    // let string = n.toString()
    let choosenNumber = string.split("")
    let splitedNumber =[]
    for(let i=0;splitedNumber.length; i++){
     choosenNumber = parseInt(choosenNumber[i]) **2
    splitedNumber[i] =choosenNumber[i]
    }
    return splitedNumber

}
let resultOne = happyNumber(n)
let sum = resultOne. reduce((acc,curr) => acc + curr,0)

while (sum != 1) {
    resultOne = happyNumber(sum)
    sum = resultOne.reduce((acc,curr) => acc+ curr,0)
    
}
console.log (sum)
console.log(`This ${n} is happy number`)