/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34

*/

function opposite(number) {
    //your code here
    if(number === -number){
      return number
    }
    if(number === number){
      return -number
    }
  }
  console.log( opposite(-12))