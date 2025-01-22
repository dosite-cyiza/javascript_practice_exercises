/*
Write a JavaScript program that iterates integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
For numbers multiples of both three and five print "FizzBuzz".
*/

let number
for (let number = 0; number <= 100; number++) {
    if(number % 3 === 0){
        console.log('Fizz');
        
    }
    else if(number % 5 === 0){
        console.log('Buzz');
        
    }
    else if(number % 3 === 0 && number % 5 === 0){
        console.log('FizzBuzz');
        
    }
    
}