/*
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions



*/
const arrowFunc = function(arr) {
    return arr.map(num => String.fromCharCode(num)).join(''); 
    //Complete this function
  }
  console.log(arrowFunc([84,101,115,116]))

  /*n JavaScript, String is a global object that represents text data (a sequence of characters). 
  It is both a constructor and a prototype that provides various methods for handling strings.

For example:

String as a constructor: You can create new string objects using new String() (though it's less common, as the primitive string type is often used).
String methods: The String object provides a variety of methods like .toUpperCase(), .toLowerCase(), .charAt(), and importantly, .fromCharCode().
String.fromCharCode() Explained:
The method String.fromCharCode() belongs to the String object and is used to create a string from one or more characters that are specified by their Unicode values (numeric codes).

The String Before fromCharCode:
Before calling String.fromCharCode(), we don't have the actual character yet; we have numeric code points that represent the characters in the Unicode or ASCII standard. For example:

The number 65 represents the character "A" in ASCII.
The number 97 represents the character "a" in ASCII.
These numeric values are code points that map to characters in a text encoding system.

String.fromCharCode() Transforms Code Points:
Once we have those numeric values (code points), we pass them to String.fromCharCode(), which turns those numbers into the actual characters they represent.

Example:
javascript
Copy
Edit
let charA = String.fromCharCode(65);  // This converts the number 65 to 'A'
let chara = String.fromCharCode(97);  // This converts the number 97 to 'a'

console.log(charA);  // Output: 'A'
console.log(chara);  // Output: 'a'
How It Works:
String.fromCharCode(65) converts the code point 65 into the corresponding character 'A'.
String.fromCharCode(97) converts the code point 97 into the corresponding character 'a'.
Putting It Together:
When you use String.fromCharCode() on multiple numbers, you're transforming an array of numeric values into readable text.

Example:
javascript
Copy
Edit
const arr = [84, 101, 115, 116];
const str = arr.map(num => String.fromCharCode(num)).join('');
console.log(str);  // Output: "Test"
Array of numbers: [84, 101, 115, 116]
Map function: map(num => String.fromCharCode(num)) converts each number to its character:
84 → 'T'
101 → 'e'
115 → 's'
116 → 't'
Join method: .join('') combines these characters into a single string: "Test".
In Summary:
The String object is a built-in JavaScript object used for working with text.
The method String.fromCharCode() is used to convert Unicode/ASCII code points (numbers) into the characters they represent.
Before calling fromCharCode, you have numeric values that correspond to characters. After calling fromCharCode, you get the characters. */