/*
 with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.
  */

function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    return total;
  }
  console.log(sum(2,3,4,5))