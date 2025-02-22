/*
/Write a function sumUnique that takes an array of numbers as an argument and returns the sum of
 the elements that appear only once in the array.
sumUnique([1, 2, 2, 3, 4, 4, 5]) // 1 + 3 + 5 => 9
sumUnique([10, 20, 20, 30, 40, 40, 50]) // 10 + 30 + 50 => 90
sumUniquey([5, 5, 10, 15, 20, 25, 25]) // 10 + 15 + 20 => 45
*/
const summationOfElementFromArray = (arr) =>{
    const filteredArray = arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element))
    return filteredArray.reduce((acc,curr) => acc+curr,0)
}
console.log(summationOfElementFromArray([1,1,2,4]))

