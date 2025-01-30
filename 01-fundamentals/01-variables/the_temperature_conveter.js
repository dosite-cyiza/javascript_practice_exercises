/*
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."

*/
let celsius = 30

// Convert Celsius to Fahrenheit

let fahrenheit = (celsius * 9/5) + 32

console.log(`${celsius}°C is ${fahrenheit}°F`)

let fahrenheit2 = 86

// Convert Fahrenheit to Celsius

let celsius2 = (fahrenheit2 - 32) * 5/9

console.log(`${fahrenheit2}°F is ${celsius2}°C`)