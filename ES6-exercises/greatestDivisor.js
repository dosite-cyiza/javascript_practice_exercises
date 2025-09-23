/**
 Greatest Common Divisor
How would you find the greatest common divisor of two numbers?

 */

const greatestCommonDivisor = (a,b) =>{
    if(b === 0){
        return a
    }
    return greatestCommonDivisor(b,a % b)

}
console.log(greatestCommonDivisor(3,5))