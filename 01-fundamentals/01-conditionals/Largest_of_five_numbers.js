/*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
Sample numbers : -5, -2, -6, 0, -1
Output : 0 */

//  Declaration of five numbers

let num1 = 1
let num2 = 2
let num3 = 6
let num4 = 10
let num5 = 0

//  Conditional statement to find the largest number

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    alert(`The largest number is ${num1}`);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    alert(`The largest number is ${num2}`);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    alert(`The largest number is ${num3}`);
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    alert(`The largest number is ${num4}`);
} else {
    alert(`The largest number is ${num5}`);
}


