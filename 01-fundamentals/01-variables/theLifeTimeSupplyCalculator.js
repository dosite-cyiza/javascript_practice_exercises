/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/
let currentAge = 18
let maximumAge = 100
let estimatedAmountSnacks = 6
let remainingYear = (maximumAge - currentAge) 
let totalAmountOfSnacks = remainingYear *(366 * 6) 
console.log(`You will need ${totalAmountOfSnacks} to last you until the ripe old age of ${remainingYear} `)



