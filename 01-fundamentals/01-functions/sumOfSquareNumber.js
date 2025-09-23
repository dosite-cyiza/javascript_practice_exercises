/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 



*/
function squareSum(numbers){
    const nbr = numbers.map(element => element*element)
    return nbr.reduce((acc,curr)=> acc+curr,0)
  
  }
  console.log(squareSum([1, 2, 2]))
  