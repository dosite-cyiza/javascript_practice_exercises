/**
 * 
 *Counting Zeros
Count Total number of zeros from 1 up to n?
Explanation: So the trick here is. if you have a number 1 to 50 the value
 is 5. just 50 divided by 10. However, if the value is 100. The value is 11. 
 you will get by 100/10 = 10 and 10/10. That's how you will get in the more zeros
  in one number like (100, 200, 1000)

 */


// const countTotalZeros = (n) =>{
//   let totalZeros = 0;
//   for (let i = 1; i <= n; i++) {
//     let numStr = i.toString();
//     for (let j = 0; j < numStr.length; j++) {
//       if (numStr[j] === '0') {
//         totalZeros++;
//       }
//     }
//   }
//   return totalZeros;
// }

// console.log(countTotalZeros(50)); 
// console.log(countTotalZeros(100)); 
// console.log(countTotalZeros(200));  

const countingZeros = (n) =>{
  let numStr
  let count = 0
  for( let i = 0; i <= n; i++){
    numStr = i.toString()
 for( let j = 0; numStr.length; j++){
      if (numStr[j] == 0){
        count ++
      }
 }
   return count 
  }

}
console.log(countingZeros(50))