/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
 */

function findAverage(array) {
    // your code here
    //checking if array === 0
    if (array.length === 0) return 0
    //calculating average
    return array.reduce((acc,curr)=> acc+curr,0)/array.length;
  }
  console.log(findAverage([1,2,3,4]))