/*
Write a JavaScript program to convert a specified number into an array of digits.   
 "123355" => [1,2,3,3,5,5] 123355 => [1,2,3,3,5,5]
*/
//first way 
const convertNumber =(num) => num.toString().split("").map(Number) 
console.log(convertNumber(123456))