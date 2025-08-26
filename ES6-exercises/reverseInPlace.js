/**
 Reverse in place
If you have a string like "I am the good boy".
 How can you generate "I ma eht doog yob"? Please note that the 
 words are in place but reversed.

 */

const reverseString = (str) => {
  return str
    .split(" ")
    .map((char) => {
      if (char.length > 1) {
        console.log(char.split("").reverse().join(""));
      } else {
        console.log(char);
      }
    })
    .join("");
};
console.log(reverseString("I am the good boy"));
