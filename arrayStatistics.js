/*
Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that
 returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }


*/

const arrayStats = (arr) =>{
    let sumOfNums = arr.reduce((curr,acc) => curr+acc,0)
    let averageOfNums = arr.reduce((curr,acc) => curr + acc,0) / arr.length
    let minimumNumberInArr = Math.min(...arr)   
    let maximumNumberInArr = Math.max(...arr)

    return {
        sum: sumOfNums,
        averageOfNums:averageOfNums.toFixed(2),
        min: minimumNumberInArr,
        max: maximumNumberInArr
    }
}
console.log(arrayStats([1, 2,3, 4, 5]))
